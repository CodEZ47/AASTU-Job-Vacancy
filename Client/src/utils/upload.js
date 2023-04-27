import { storage } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
export const handleUpload = async (documents) => {
  const res = {};
  const promises = [];
  console.log(documents);
  let count = 0;
  documents.forEach((file) => {
    const uploadTask = uploadBytesResumable(
      ref(storage, `documents/${file.file.name}`),
      file.file
    );
    const prom = new Promise((resolve, reject) => {
      uploadTask.on("state_changed", (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      });
      uploadTask.then(() => {
        count++;
        console.log(count);
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          resolve({
            [file.name]: url,
          });
        });
        console.log("Uploaded a blob or file!");
        if (count === documents.length) {
          console.log("All files uploaded");
        }
      });
    });
    promises.push(prom);
  });

  return await Promise.allSettled(promises);
};

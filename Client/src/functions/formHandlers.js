export const handleTextFieldChange = (setData) => (e) => {
  setData(e.target.value);
};

export const handleFileChange = (setFile) => (e) => {
  setFile(e.target.files[0]);
};

export const isApplicant = () => {
    const local = localStorage.getItem("role");
    if (local == "APPLICANT") {
        return true;
    }
    return false;
}
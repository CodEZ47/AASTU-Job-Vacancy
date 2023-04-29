import { useAtom } from "jotai";
import { authAtom } from "../atoms/authAtom";
import { Navigate } from "react-router-dom";

export default function RedirectUser(){
    const [auth, setAuth] = useAtom(authAtom);
    if(auth.role == "APPLICANT") return <Navigate to='/OpenVacancies' replace/>
    if(auth.role == "ADMIN") return <Navigate to='/dashboard' replace/>
    else return <Navigate to='/signin' replace/>
}
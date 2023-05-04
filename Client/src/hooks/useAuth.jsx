import { Navigate } from 'react-router';
import { authAtom, useIsAuthenticated } from '../atoms/authAtom';
import { useAtom } from 'jotai';
export default function IsAuth({children, role}){
    const [auth,setAuth] = useAtom(authAtom);
    const local = useIsAuthenticated();
    if (local != null && role.find((r)=> auth.role == r) !== undefined) return children;
    else return <Navigate to='/signin' replace/>
}
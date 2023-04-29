import { Navigate } from 'react-router';
import { useIsAuthenticated } from '../atoms/authAtom';
export default function IsAuth({children}){
    const local = useIsAuthenticated();
    console.log(local, 'local')
    if (local != null) return children;
    else return <Navigate to='/signin' replace/>
}
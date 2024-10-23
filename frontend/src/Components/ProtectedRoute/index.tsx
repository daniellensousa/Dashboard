import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../context/authContext";

interface ProtectedRouteProps {
    children?: React.ReactNode
}

export function ProtectedRoute({ children }: Readonly<ProtectedRouteProps>){
    const { isAuthenticated } = useAuth();

    if(!isAuthenticated){
        return <Navigate to='/' replace />
    }
    return children ? <>{children}</> : <Outlet />;
}
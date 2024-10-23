import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }: { children: JSX.Element }) {
    const authToken = localStorage.getItem('authToken');
    
    if (!authToken) {
        return <Navigate to="/" />;
    }

    return children;
}

export default ProtectedRoute;

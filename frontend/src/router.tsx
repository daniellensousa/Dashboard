import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Order from "./Pages/Order";
import Sidebar from "./Components/Sidebar";
import ProtectedRoute from './Components/ProtectedRoute';

export default function Router() {
    const location = useLocation();
    return (
        <div className="main-content">
            {location.pathname !== "/" && <Sidebar />}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route 
                    path="/home" 
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    } 
                />
                <Route 
                    path="/orders" 
                    element={
                        <ProtectedRoute>
                            <Order />
                        </ProtectedRoute>
                    } 
                />
            </Routes>
        </div>
    );
}

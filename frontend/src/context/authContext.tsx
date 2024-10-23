import { createContext, useContext, useState } from "react";

interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}
interface AuthProviderProps {
    children: React.ReactNode
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error('useAuth must bt used within an AuthProvider')
    }
    return context;
}

export function AuthProvider({ children }: Readonly<AuthProviderProps>) {
    const [isAuthenticated, setIsAuthenticade] = useState<boolean>(true);

    const login = () => setIsAuthenticade(true)
    const logout = () => setIsAuthenticade(false)

    return(
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}


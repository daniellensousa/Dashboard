import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { getLogin } from "../service/login/api";

export default function useLogin(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await getLogin(email, password)

            if(response.status  == 200){
                localStorage.setItem('authToken', response.data.token);
                navigate('/home')            
            }
        } catch (error: any) {
            if (error.response) {
                setMessage(error.response.data.message);
            } else {
                setMessage('Login ou senha incorretos');
            }
        }
    };

    return{
        handleLogin,
        setEmail,
        email,
        password,
        setPassword,
        message,
        setMessage,
    }
}
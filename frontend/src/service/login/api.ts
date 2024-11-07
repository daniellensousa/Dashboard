import axios from "axios";

export const url = "http://127.0.0.1:5000"

export async function getLogin(email: string, password: string){
    const data = await axios.post(`${url}/login`, {
        email, 
        password
    })
    return data
}
import * as _ from './style'
import { useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router'
export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/login', {
                email,
                password,
            });
            if(response.status  == 200){
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


    return (
        <_.Container>
            <_.Content>
                {message && <p>
                    {message}
                    </p>}
                <_.BannerLogin>
                    <_.Banner>
                        <img src="" alt="imagem dash" />
                    </_.Banner>
                    <_.BannerContent>
                        <h1>title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, cum in voluptatem, vitae facilis deleniti, deserunt eveniet nemo voluptatum obcaecati officia voluptates velit ducimus labore. Saepe est libero laborum tempore!</p>
                    </_.BannerContent>
                </_.BannerLogin>
                <_.FormLogin>
                    <_.FormLogo>
                        <img src="" alt="logo" />
                    </_.FormLogo>
                    <_.Form>
                        <form onSubmit={handleLogin}>
                            <label htmlFor="">Username or e-mail</label>
                            <input
                                value={email}
                                placeholder="Enter your email here"
                                onChange={(e) => setEmail(e.target.value)}
                                className={'inputBox'}
                            />
                            <label htmlFor="">Password</label>
                            <input
                                value={password}
                                placeholder="Enter your password here"
                                onChange={(e) => setPassword(e.target.value)}
                                className={'inputBox'}
                            />
                            <input type="submit" value="enviar" />
                        </form>
                    </_.Form>
                </_.FormLogin>
            </_.Content>
        </_.Container>
    )
}
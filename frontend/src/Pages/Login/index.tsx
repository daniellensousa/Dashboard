import * as _ from './style'
import useLogin from '../../hook/useLogin'
import { MdOutlineEmail, MdOutlineRemoveRedEye } from 'react-icons/md';

export default function Login() {
    const login = useLogin();
    return (
        <_.Container>
            <_.Content>
                <_.FormLogin>
                    <_.FormLogo>
                        <p>Sign in to Dashboard</p>
                    </_.FormLogo>
                    <_.Form>
                        <form onSubmit={login.handleLogin}>
                            <_.Input>
                                <_.InputLine>
                                    <MdOutlineEmail />
                                    <input
                                        id='email-id'
                                        value={login.email}
                                        placeholder="Enter your email here"
                                        onChange={(e) => login.setEmail(e.target.value)}
                                        className={'inputBox'}
                                    />

                                </_.InputLine>
                            </_.Input>
                            <_.Input>
                                <_.InputLine>
                                    <MdOutlineRemoveRedEye />
                                    <input
                                        id='password-id'
                                        value={login.password}
                                        placeholder="Enter your password here"
                                        onChange={(e) => login.setPassword(e.target.value)}
                                        className={'inputBox'}
                                        type='password'
                                    />
                                </_.InputLine>
                            </_.Input>                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                            <_.LogIn type="submit" value="Log in" />
                            <_.MessageStatus>
                                {login.message && <p>
                                    {login.message}
                                </p>}
                            </_.MessageStatus>
                        </form>
                    </_.Form>
                </_.FormLogin>
                <_.BannerLogin>
                    <_.BannerContent>
                        <h1>Hello, Friend</h1>
                        <p>Enter your personal details and start joruney with us</p>
                    </_.BannerContent>
                </_.BannerLogin>
            </_.Content>
        </_.Container>
    )
}
import styled from "styled-components";
import background from "../../assets/background.png"
export const Container = styled.main``

export const Content = styled.div`
display: flex;
justify-content: space-between;
height: 100vh;
`

export const BannerLogin = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    background-image: url(${background});
`
export const BannerContent = styled.div`
    text-align: center;
    padding: 0 1rem;
    color: white;
`

export const FormLogin = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    width: 50%;
`

export const FormLogo = styled.div`
    text-align: center;
    font-weight: bold;
`

export const Form = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        width: 70%;
    }
`


export const Input = styled.div`
    label{
        font-weight: 600;
    }
`
export const InputLine = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${p => p.theme.borders.regularPink};
    padding: 1rem;
    border-radius: 7px;
    background-color: ${p => p.theme.colors.gray[10]};
    color: ${p => p.theme.colors.gray[20]};
    input{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        outline: unset;
        color: ${p => p.theme.colors.gray[40]};
    }
`
    
export const  LogIn = styled.input`
     border: none;
     outline: unset;
     padding: 0.5rem;
     border-radius: 10px;
     background-color: pink;
     color: ${p => p.theme.colors.pink[20]};
     font-weight: 600;
     cursor: pointer;
     width: 40%;
`
export const MessageStatus = styled.div`
    text-align: center;
    color: red;
`


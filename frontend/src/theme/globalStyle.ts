import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }
    
    body{
        background: white;
        height: 100vh;
        box-sizing: border-box;
    }
`

export const Scroll = css`
    ::-webkit-scrollbar {
    width: 3px;
    padding: 1rem;
    border-radius: 10px;
    height: 0.5rem;
    position: relative;
    display: grid;
    justify-content:center;
    padding: 1rem;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    height: 1rem;
    width: 30px;
    border-radius: 30px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${p=>p.theme.colors.gray[50]}; 
    border-radius: 50px;
    height: 1.5rem;
  }
`

const XSMALL_SIZE = '600px'
const SMALL_SIZE = '900px'
const DEFAULT_SIZE = '1300px'
const LARGE_SIZE = '1400px'
const XLARGE_SIZE = '1700px'
const XXLARGE_SIZE = '1900px'

export {
    XSMALL_SIZE,
    SMALL_SIZE,
    DEFAULT_SIZE,
    LARGE_SIZE,
    XLARGE_SIZE,
    XXLARGE_SIZE
}
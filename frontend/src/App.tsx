import { ThemeProvider } from "styled-components"
import { theme } from "./theme"
import Router from "./router"
import './translate'
import './index.css'
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

import { ThemeProvider } from "styled-components"
import { theme } from "./theme"
import Router from "./router"
import './translate'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./context/authContext"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App

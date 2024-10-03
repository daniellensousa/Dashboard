import { ThemeProvider } from "styled-components"
import { theme } from "./theme"
import Router from "./router"
import './translate'
function App() {
  return (
    <ThemeProvider theme={theme}>
        <Router />
    </ThemeProvider>
  )
}

export default App

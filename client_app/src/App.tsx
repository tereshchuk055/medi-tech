import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./pages/AppRoutes"

function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App

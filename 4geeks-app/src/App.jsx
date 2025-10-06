import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Login'
import SignUp from "./Signup"
import Private from "./Private"
import Logout from "./Logout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/private" element={<Private />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

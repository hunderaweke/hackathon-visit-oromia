import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Layout } from './pages/Layout'
import Home from "./pages/Home";
import Login from "./components/Login_Signup/Login";
import Signup from "./components/Login_Signup/Signup";

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

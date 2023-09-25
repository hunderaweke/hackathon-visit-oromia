import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./components/login_signup/Login";
import Signup from "./components/login_signup/Signup";
<<<<<<< HEAD
import { Places } from "./pages/Places";
import { User } from "./pages/Profile";
=======
import Places from "./pages/Places";
>>>>>>> 394a0bd67b2e7e4f6ffb782115af8a6f1f7a7ead

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/places" element={<Places />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="places" element={<Places />} />
          <Route path="profile" element={<User />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

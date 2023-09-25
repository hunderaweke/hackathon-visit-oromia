import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./components/login_signup/Login";
import Signup from "./components/login_signup/Signup";
import { User } from "./pages/Profile";
import Places from "./pages/Places";
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

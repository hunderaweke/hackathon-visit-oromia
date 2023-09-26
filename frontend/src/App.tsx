import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./components/login_signup/Login";
import Signup from "./components/login_signup/Signup";
import Places from "./pages/Places";
import Group from "./pages/Group";
import PlaceDetail from "./components/Places/PlaceDetail/PlaceDetail";
import { UserProfile } from "./components/user_profile/UserProfile";
import Stories from "./pages/Stories";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/places" element={<Places />} />
            <Route path="/groups" element={<Group />} />
            <Route path="/places" element={<Places />} />
            <Route path="/stories" element={<Stories />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/place/detail" element={<PlaceDetail />} />
          <Route path="/user" element={<UserProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

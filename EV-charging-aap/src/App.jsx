import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Home from "./components/Home";
import FindCPO from "./components/FindCPO";
import Signup from "./components/Signup";

function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/find-cpo" element={<FindCPO />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

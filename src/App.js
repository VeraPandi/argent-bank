import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile";
import Navigation from "./components/header/Navigation";
import Footer from "./components/footer/Footer";
import "./styles/main.scss";

const App = () => {
   return (
      <Router>
         <Navigation />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
         </Routes>
         <Footer />
      </Router>
   );
};

export default App;

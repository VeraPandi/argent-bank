import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile";
import Navigation from "./components/header/Navigation";
import Footer from "./components/footer/Footer";
import NotFound from "./pages/NotFound.jsx";
import { userIsLoggedSelector } from "./utils/selectors.js";
import "./styles/main.scss";

const App = () => {
   const isLogged = useSelector(userIsLoggedSelector);

   return (
      <Router basename={process.env.PUBLIC_URL}>
         <Navigation />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {isLogged && <Route path="/profile" element={<Profile />} />}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
         </Routes>
         <Footer />
      </Router>
   );
};

export default App;

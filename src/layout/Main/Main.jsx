import { Outlet } from "react-router-dom";
import NavBar from "../../shared/NavBar/NavBar";
import Footer from "../../shared/Footer/Footer";
import 'aos/dist/aos.css';


const Main = () => {
    
      
    return (
        <div className="w-[90%] mx-auto">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;
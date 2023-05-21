import { Outlet } from "react-router-dom";
import NavBar from "../../shared/NavBar/NavBar";
import Footer from "../../shared/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Main = () => {
    useEffect(() => {
        AOS.init({
          duration: 800,
          once: true,
        });
      }, []);
      
    return (
        <div data-aos="animation_name" className="w-[90%] mx-auto">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;
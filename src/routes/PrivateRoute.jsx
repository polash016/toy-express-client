import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    return  <div>{alert('Please Login Before Entering the Page')} <Navigate state={{from: location}} to='/login'></Navigate></div>
};

export default PrivateRoute;
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const MyToys = () => {
    const [toys, setToys] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    },[])
    return (
        <div>
            
        </div>
    );
};

export default MyToys;
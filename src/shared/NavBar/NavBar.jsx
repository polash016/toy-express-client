import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const NavBar = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
        .then()
        .catch(error => {
            console.log(error);
        })
    }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li tabIndex={0}>
              <Link to='/allToys' className="justify-between">All Toys</Link>
            </li>
            <li>
            <Link to='/myToys'>My Toys</Link>
            </li>
            <li>
            <Link to='/addToys'>Add A Toy</Link>
          </li>
          <li>
            <Link to='/blogs'>Blogs</Link>
          </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li tabIndex={0}>
          <Link to='/allToys'>All Toys</Link>
          </li>
          <li>
            <Link to='/myToys'>My Toys</Link>
          </li>
          <li>
            <Link to='/addToys'>Add A Toy</Link>
          </li>
          <li>
            <Link to='/blogs'>Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {
            user && <div className="avatar">
            <div className="w-10 h-10 mr-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img title={user?.email} src={user?.photoURL} />
            </div>
          </div>
        }
        {user ? <Link><button onClick={handleLogout} className="btn">Logout</button></Link>:
        <Link to='/login'><button className="btn">Login</button></Link>}
      </div>
    </div>
  );
};

export default NavBar;

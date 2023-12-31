import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Collapse,
} from "@material-tailwind/react";
import logo from '../../../src/image/logo.png'

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className=" flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal "
      >
        <Link to="/" className="justify-between">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal "
      >
        <Link to="/allToys" className="justify-between">
          All Toys
        </Link>
      </Typography>
      { user && <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal "
      >
        <Link className="flex items-center" to="/myToys">
          My Toys
        </Link>
      </Typography>}
     { user && <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/addToys">Add A Toy</Link>
      </Typography>}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/blogs">Blogs</Link>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky bg-opacity-50 bg-transparent inset-0 z-10 h-min max-w-full   px-4 ">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            className=" cursor-pointer"
          >
            <img src={logo} alt="" />
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-1 hidden lg:block w-full">{navList}</div>
            {/* <Avatar src="/img/face-2.jpg" alt="avatar" /> */}
            {user && (
              <div className="ml-4">
                <Avatar className="h-10 w-14" title={user?.email} src={user?.photoURL} />
              </div>
            )}
            {user ? (
              <Link>
                <Button
                  onClick={handleLogout}
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>Logout</span>
                </Button>
              </Link>
            ) : (
              <Link to="/login">
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>Login</span>
                </Button>
              </Link>
            )}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}

          {user ? (
            <Button
              onClick={handleLogout}
              variant="gradient"
              size="sm"
              className="mb-2"
            >
              <span>Logout</span>
            </Button>
          ) : (
            <Link to='/login'><Button variant="gradient" size="sm" className="mb-2">
            <span>Login</span>
          </Button></Link>
          )}
        </Collapse>
      </Navbar>
    </>
  );
}; 

export default NavBar;

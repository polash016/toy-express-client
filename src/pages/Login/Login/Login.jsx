import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import img from "../../../../public/image/login.jpg";
import { Button, Card, Checkbox, Input, Typography } from "@material-tailwind/react";

const Login = () => {
  const { googleLogin, emailLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleEmailLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    emailLogin(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Card
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      color="transparent"
      shadow={false}
    >
      <div className="mx-auto h-full">
        <Typography variant="h4" color="white">
          Sign Up
        </Typography>
        <Typography color="white" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
      </div>
      <form
        onSubmit={handleEmailLogin}
        className="mt-8 mb-2 w-80 max-w-screen-lg mx-auto sm:w-96"
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input name="email" size="lg" label="Email" />
          <Input name="password" type="password" size="lg" label="Password" />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-blue-500"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button type="submit" className="mt-6" fullWidth>
          Login
        </Button>
        <Typography color="white" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Sign In
          </Link>
        </Typography>
        <div className="divider">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="btn btn-circle btn-outline mx-auto"
        >
          <FaGoogle />
        </button>
      </form>
    </Card>
  );
};

export default Login;

import { useContext, useState } from "react";
import { FaGooglePlusG } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import img from "../../../../src/image/login.jpg";
import img2 from "../../../../src/image/regular1.jpg";
import { Button, Card, Checkbox, Input, Typography } from "@material-tailwind/react";
import useTitle from "../../../hooks/useTitle";

const Login = () => {
  const { googleLogin, emailLogin } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('')
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useTitle('Login')

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
        setError('')
        setSuccess('Login Successfull')
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err);
      });
  };
  return (
    <Card
      style={{
        backgroundImage: `url(${img2})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      color="transparent"
      shadow={false}
    >
      <div className="mx-auto mt-6 h-full">
        <Typography variant="h4">
          Login Here
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
        <div><span className="text-blue-700">{error}</span></div>
        <div><span className="text-blue-700">{success}</span></div>
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
        <Typography className="mt-4 text-center font-semibold">
          Already have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-blue-500 transition-colors hover:text-blue-700"
          >
            Register Here
          </Link>
        </Typography>
        <div className="divider ml-40">OR</div>

        <div className="w-full ml-40">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-circle btn-outline"
          title="Login With Google"
        >
          <FaGooglePlusG className="w-10 h-8" />
        </button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

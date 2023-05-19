import { useContext } from "react";
import {  FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import img from '../../../../public/image/login.jpg'

const Login = () => {
    const {googleLogin, emailLogin} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            console.log(result.user)
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error)
        })
    }
    const handleEmailLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        emailLogin(email, password)
        .then(result => {

            console.log(result.user)
            navigate(from, {replace: true})
        })
        .catch(err => {
            console.log(err)
        })
    }
  return (
    <form onSubmit={handleEmailLogin} className="hero min-h-screen bg-base-200" style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}>
      <div className="hero-content flex-col lg:flex-row w-full" >
        <div className="text-center lg:text-left w-[50%]">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-opacity-50 flex-shrink-0 w-full max-w-sm shadow-2xl ">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              {/* <button className="btn btn-primary">Login</button> */}
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <div>
                <p>New Here? <Link to='/register'>Register</Link></p>
            </div>
            <div className="divider">OR</div>

            <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline mx-auto">
              <FaGoogle />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;

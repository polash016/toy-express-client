import { Link } from "react-router-dom";
import img from "../../../../public/image/register.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const Registration = () => {
    const {registerWithEmail} = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value
        console.log(name, email, password,photo)
        registerWithEmail(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
        form.reset()
    }
  return (
    <form onSubmit={handleRegister}
      className="hero min-h-screen bg-base-200 text-white"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "left",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-content flex-col lg:flex-row w-full">
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
                <span className="">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="">Email</span>
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
                <span className="">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered text-black"
              />
            </div>
            <label className="label">
              <span className="">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <button className="btn btn-primary mb-4">Register</button>
          </div>
          <div className="ml-4 mb-2">
            <p>
              Already Registered? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Registration;

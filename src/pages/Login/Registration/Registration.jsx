import { Link } from "react-router-dom";
import img from "../../../../src/image/new77.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import useTitle from "../../../hooks/useTitle";

const Registration = () => {
    const {registerWithEmail} = useContext(AuthContext);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    useTitle('Registration')

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        if(!password > 6){
          return
        }
        registerWithEmail(email, password)
        .then(result => {
            console.log(result.user)
            setError('')
            setSuccess('Registration Successfull')
            
        form.reset()
        })
        .catch(error => {
          setSuccess('')
            setError(error.message)
            console.log(error)
        })
    }
  return (
    <div>


    <Card style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "left",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }} color="transparent" shadow={false}>
      <div className="mx-auto mt-6">
      <Typography variant="h4" color="">
        Sign Up
      </Typography>
      </div>
      <form onSubmit={handleRegister} className="mt-8 mb-2 w-80 max-w-screen-lg mx-auto sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input name="name" size="lg" label="Name" />
          <Input name="email" size="lg" label="Email" />
          <Input name="photo" type="text" size="lg" label="Photo URL" />
          <Input name="password" type="password" size="lg" label="Password" />
        </div>
        <div><span className="text-blue-700">{error}</span></div>
        <div><span className="text-blue-700">{success}</span></div>
        <Checkbox
          label={
            (
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
            )
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        
        <Button type="submit" className="mt-6" fullWidth>
          Register
        </Button>
        <Typography className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link
            to='/login'
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Sign In
          </Link>
        </Typography>
      </form>
    </Card>
    </div>
    
  );
};

export default Registration;

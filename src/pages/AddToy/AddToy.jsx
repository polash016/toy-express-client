import { useForm } from "react-hook-form";
import {
  Card,
  CardBody,
  Input,
  Button,
  Tabs,
  TabPanel
} from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {
    const {user} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://a11-toy-express-server-polash016.vercel.app/addToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Toy is Added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        reset()
      });
  };
  return (
    <div>
      <Card
        className="w-full max-w-[40%] mx-auto"
        style={{
          backgroundImage: `url(${""})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <CardBody>
          <Tabs>
            <TabPanel value="card" className="p-0">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-12 flex flex-col gap-3"
              >
                <div>
                  <Input
                    label="Photo URL"
                    {...register("picture_url", { required: true })}
                  />
                  {errors.picture_url && <span>This field is required</span>}
                </div>

                <div>
                  <div className="my-6">
                    <Input
                      value={user.email}
                      {...register("seller_email", { required: true })}
                    />
                    {errors.picture_url && <span>This field is required</span>}
                  </div>
                  <div className="my-4 flex items-center gap-4">
                    <Input
                      label="Name"
                      containerProps={{ className: "min-w-[72px]" }}
                      {...register("name")}
                    />

                    <select
                      className="p-3 rounded-lg border-solid border-slate-300 w-72"  
                      label="Category"
                      {...register("sub_category")}
                    >
                      <option value="Sports">Sports</option>
                      <option value="Truck">Truck</option>
                      <option value="Regular">Regular</option>
                      <option  value="Mini Fire Truck">Fire Truck </option>
                    </select>
                  </div>
                  <div className="my-4 flex items-center gap-4">
                    <Input
                      label="Price"
                      containerProps={{ className: "min-w-[72px]" }}
                      {...register("price")}
                    />
                    <Input
                      label="Available Quantity"
                      containerProps={{ className: "min-w-[72px]" }}
                      {...register("available_quantity")}
                    />
                  </div>
                </div>
                <Button size="lg" type="submit">Submit</Button>
              </form>
            </TabPanel>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddToy;

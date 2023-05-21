// import { CardFooter } from '@material-tailwind/react';
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Card,
  CardBody,
  Input,
  Button,
  Tabs,
  TabPanel,
} from "@material-tailwind/react";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const toy = useLoaderData();
  const { _id, seller_email, picture_url, name, price, available_quantity } =
    toy;
    console.log(toy)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`http://localhost:5000/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Toy is Updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <Card
      className="w-[50%] max-w-[40%] mx-auto"
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
                  defaultValue={picture_url}
                  {...register("picture_url", { required: true })}
                />
                {errors.picture_url && <span>This field is required</span>}
              </div>

              <div>
                <div className="my-6">
                  <Input
                    value={seller_email}
                    {...register("seller_email", { required: true })}
                  />
                  {errors.picture_url && <span>This field is required</span>}
                </div>
                <div className="my-4 flex items-center gap-4">
                  <Input
                    label="Name"
                    {...register("name")}
                    defaultValue={name}
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
                    <option value="Mini Fire Truck">Fire Truck </option>
                  </select>
                </div>
                <div className="my-4 flex items-center gap-4">
                  <Input
                    label="Price"
                    defaultValue={price}
                    containerProps={{ className: "min-w-[72px]" }}
                    {...register("price")}
                  />
                  <Input
                    label="Available Quantity"
                    defaultValue={available_quantity}
                    containerProps={{ className: "min-w-[72px]" }}
                    {...register("available_quantity")}
                  />
                </div>
              </div>

              <Button size="lg" type="submit">
                Submit
              </Button>
            </form>
          </TabPanel>
        </Tabs>
      </CardBody>
    </Card>
  );
};

export default UpdateToy;

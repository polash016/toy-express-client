import { useForm } from "react-hook-form";
// import React from "react";
import {
  Card,
  CardBody,
  Input,
  Button,
  Tabs,
  TabPanel,
  Option,
  Select,
} from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const AddToy = () => {
    const {user} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/addToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
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
            {/* <TabsHeader>
                <Tab>Add Toy</Tab>
              </TabsHeader> */}
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
                      label="Seller Email"
                      value={user.email}
                      {...register("seller_email", { required: true })}
                    />
                    {errors.picture_url && <span>This field is required</span>}
                  </div>
                  <div className="my-4 flex items-center gap-4">
                    <Input
                      label="Name"
                      maxLength={5}
                      containerProps={{ className: "min-w-[72px]" }}
                      {...register("name")}
                    />

                    <select
                      className="p-3 rounded-lg border-solid border-slate-300 w-72"  
                      label="Category"
                      {...register("sub_category")}
                      maxLength={5}
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
                      maxLength={5}
                      containerProps={{ className: "min-w-[72px]" }}
                      {...register("price")}
                    />
                    <Input
                      label="Available Quantity"
                      maxLength={4}
                      containerProps={{ className: "min-w-[72px]" }}
                      {...register("available_quantity")}
                    />
                  </div>
                </div>
                {/* <Button size="lg">Pay Now</Button> */}
                <input className="btn" type="submit" value="Submit" />
              </form>
            </TabPanel>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddToy;

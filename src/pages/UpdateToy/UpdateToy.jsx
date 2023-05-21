// import { CardFooter } from '@material-tailwind/react';
import { useLoaderData } from 'react-router-dom';
import { useForm } from "react-hook-form";
import {
    Card,
    CardBody,
    Input,
    Button,
    Tabs,
    TabPanel
  } from "@material-tailwind/react";
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const UpdateToy = () => {
    const toy = useLoaderData();
    const {user} = useContext(AuthContext)
    const { _id,email, picture_url, name, sub_category, price, available_quantity} = toy
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
        fetch(`http://localhost:5000/update/${_id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.modifiedCount > 0){
              alert('success')
            }
          })
      };
          
    // const handleUpdate = (data) => {
    //     e.preventDefault()
    //     const form = e.target;
    //     const name = form.name.value;
    //     const quantity = form.quantity.value;
    //     const price = form.price.value;
    //     const doc = {name, quantity, price}
    //     console.log(doc)
    //     fetch(`http://localhost:5000/update/${_id}`, {
    //       method: 'PUT',
    //       headers: {
    //         'content-type': 'application/jason'
    //       },
    //       body: JSON.stringify(doc)
    //     })
    //     .then((res) => res.json())
    //       .then((data) => {
    //         console.log(data);
    //         if(data.modifiedCount > 0){
    //           alert('success')
    //         }
    //       })
    //   };
    return (
        // <div>
        //     <form onSubmit={handleUpdate} className="flex flex-col gap-4">
        //                         <Input
        //                           defaultValue={name}
        //                           name="name"
        //                           label="name"
        //                           size="lg"
        //                         />
        //                         <Input
        //                           defaultValue={available_quantity}
        //                           name="quantity"
        //                           label="Update Quantity"
        //                           size="lg"
        //                         />
        //                         <Input
        //                           defaultValue={price}
        //                           name="price"
        //                           label="price"
        //                           size="lg"
        //                         />
                                
                                
        //                         <CardFooter className="pt-0 flex justify-between">
        //                       <Button type="submit" variant="gradient" >
        //                         Update
        //                       </Button>
        //                     </CardFooter>
        //                       </form>
        // </div>
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
                    defaultValue={picture_url}
                    {...register("picture_url", { required: true })}
                  />
                  {errors.picture_url && <span>This field is required</span>}
                </div>

                <div>
                  <div className="my-6">
                    <Input
                      value={user?.email}
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
                      <option  value="Mini Fire Truck">Fire Truck </option>
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
                      maxLength={4}
                      containerProps={{ className: "min-w-[72px]" }}
                      {...register("available_quantity")}
                    />
                  </div>
                </div>
                {/* <Button size="lg">Pay Now</Button> */}
                {/* <input className="btn" type="submit" value="Submit" /> */}
                <Button size="lg" type="submit">Submit</Button>
              </form>
            </TabPanel>
          </Tabs>
        </CardBody>
      </Card>
    );
};

export default UpdateToy;
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const TABLE_HEAD = ["Image", "Name", "Price", "Rating", "Update", "Delete"];

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen((cur) => !cur);
  const handleUpdate = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const id = form.id.value;
    const doc = {name, quantity, price}
    console.log(doc)
    fetch(`http://localhost:5000/update/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/jason'
      },
      body: JSON.stringify(doc)
    })
    .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount > 0){
          alert('success')
        }
      })
  };

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);
  return (
    <div>
      <Card className="h-full w-full">
        <CardBody className="px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 py-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {toys.map(
                (
                  { _id, picture_url, name, price, available_quantity },
                  index
                ) => {
                  const isLast = index === toys.length - 1;
                  const classes = isLast
                    ? "py-4"
                    : "py-4 border-b border-blue-gray-50";

                  return (
                    <tr key={_id}>
                      <td className={classes}>
                        <div className="">
                          <Avatar
                            src={picture_url}
                            alt={name}
                            size="md"
                            className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain"
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {price}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {available_quantity}
                        </Typography>
                      </td>
                      {/* Modal */}
                      
                      {/* modal ends */}
                      <Link to={`/update/${_id}`}><Button className="my-4">
                          <FaEdit variant="text" color="blue-gray"></FaEdit>
                        </Button></Link>
                      

                      {/* <td className={classes}>
                      <Tooltip content="Edit User">
                        <Button><FaEdit variant="text" color="blue-gray" >
                        </FaEdit></Button>
                      </Tooltip>
                    </td> */}
                      <td className={classes}>
                        {/* <Button className="h-4 w-4">Delete</Button> */}
                        <Tooltip content="Delete User">
                          <Button>
                            <FaTrash variant="text" color="blue-gray"></FaTrash>
                          </Button>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default MyToys;

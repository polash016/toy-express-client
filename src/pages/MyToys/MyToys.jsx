import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";


import {
    Card,
    Typography,
    CardBody,
    Avatar,
    Button,

  } from "@material-tailwind/react";

  const TABLE_HEAD = ["Image", "Name", "Price", "Rating", "Update", "Delete"];
 


const MyToys = () => {
    const [toys, setToys] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setToys(data)
        })
    },[user.email])
    return (
        <div>

            
            <Card className="h-full w-full">

      <CardBody className="px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 py-4">
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
              ({ picture_url, name, price, available_quantity}, index) => {
                const isLast = index === toys.length - 1;
                const classes = isLast ? "py-4" : "py-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={name}>
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
                    <td  className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {price}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {available_quantity}
                      </Typography>
                    </td>
                    <td className={classes}>
                          <Button className="h-4">Update</Button>
                      {/* <Tooltip content="Edit User">
                        <IconButton variant="text" color="blue-gray">
                        </IconButton>
                      </Tooltip> */}
                    </td>
                    <td className={classes}>
                          <Button className="h-4 w-4">Delete</Button>
                      {/* <Tooltip content="Edit User">
                        <IconButton variant="text" color="blue-gray">
                        </IconButton>
                      </Tooltip> */}
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
 
    </Card>
        </div>
        
    );
};

export default MyToys;
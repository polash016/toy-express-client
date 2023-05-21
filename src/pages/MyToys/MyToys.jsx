import  { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Avatar, Button, Card, CardBody, Tooltip, Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";

const TABLE_HEAD = ["Image", "Name", "Price", "Rating", "Update", "Delete"];

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);
  

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`http://localhost:5000/toys/${id}`,{
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.deletedCount>0){
            Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        const updatedToys = toys.filter(toy => toy._id !== id);
        setToys(updatedToys)
          }
        })
      }
    })
  }

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
                    
                      <Link to={`/update/${_id}`}><Button className="my-4">
                          <FaEdit variant="text" color="blue-gray"></FaEdit>
                        </Button></Link>
                      

                    
                      <td className={classes}>
                       
                        <Tooltip content="Delete User">
                          <Button onClick={()=> handleDelete(_id)}>
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

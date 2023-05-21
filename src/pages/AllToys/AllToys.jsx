
import { useEffect, useState } from "react";
import {
  Card,
  Typography,
  CardBody,
  Avatar,
  Button,

} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const TABLE_HEAD = ["Image","Seller", "Name", "Category", "Price", "Quantity", "Details"];

const AllToys = () => {
//   const toysData = useLoaderData();
  const [toys, setToys] = useState([])
  const [searchText, setSearchText] = useState('')

useEffect(() => {
    fetch('http://localhost:5000/toys')
    .then(res=> res.json())
    .then(data =>setToys(data))
},[])

  const handleSearch = (event) => {
    event.preventDefault()
    fetch(`http://localhost:5000/toys/${searchText}`)
    .then(res=> res.json())
    .then(data =>setToys(data))
    event.target.reset()
  }

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <form onSubmit={handleSearch} className="mt-8 mb-8 flex justify-center items-center">
            <input onChange={(e) => setSearchText(e.target.value)} className="p-2 w-[30%]" type="text" placeholder="Search Here" />
            
            <input className="btn" type="submit" value="Search" />
        </form>
        <Card className="h-full w-full">

<CardBody className="">
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
        ({_id, picture_url, seller_name, name, sub_category, price, available_quantity}, index) => {
          const isLast = index === toys.length - 1;
          const classes = isLast ? "py-4" : "py-4 border-b border-blue-gray-50";

          return (
            <tr key={name}>
              <td className={classes}>
                <div className="">
                  <Avatar
                    src={picture_url}
                    alt={name}
                    size="xxl"
                    variant="square"
                    className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain"
                  />
                </div>
              </td>
              <td  className={classes}>
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {seller_name}
                </Typography>
              </td>
              <td  className={classes}>
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {name}
                </Typography>
              </td>
              <td className={classes}>
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {sub_category}
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
                   <Link to={`/toy/${_id}`}> <Button className="">Details</Button></Link>
               
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



    
    </div>
  );
};

export default AllToys;

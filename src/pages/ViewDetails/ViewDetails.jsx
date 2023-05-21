import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter,
  } from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const toy = useLoaderData();
    console.log(toy)
    const {picture_url, name, price, available_quantity, rating, seller_email, seller_name, description} = toy;
    return (
        <Card className="w-[50%] mx-auto">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img 
          src={picture_url}
        />
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between mb-2">
          <Typography color="blue-gray" className="font-medium">
            {name}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            ${price}
          </Typography>
        </div>
        <Typography variant="small" color="gray" className="font-normal opacity-75">
          <span className="font-semibold">Seller Name:</span> {seller_name}
        </Typography>
       
        <Typography variant="small" color="gray" className="font-normal opacity-75">
        <span className="font-semibold">Seller Email:</span> {seller_email}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal opacity-75">
        <span className="font-semibold">Seller Email:</span>{seller_email}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal opacity-75">
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
    );
};

export default ViewDetails;
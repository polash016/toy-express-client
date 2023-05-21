import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
} from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const ViewDetails = () => {
  const toy = useLoaderData();
  console.log(toy);
  const {
    picture_url,
    name,
    price,
    available_quantity,
    rating,
    seller_email,
    seller_name,
    description,
  } = toy;
  return (
    <Card className="w-[50%] mx-auto">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img src={picture_url} />
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
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 mb-2"
        >
          <span className="font-semibold">Seller Name:</span> {seller_name}
        </Typography>

        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 mb-2"
        >
          <span className="font-semibold">Seller Email:</span> {seller_email}
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 mb-2"
        >
          <span className="font-semibold">Available Quantity:</span>
          {available_quantity}
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 mb-2"
        >
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
      <Rating
      style={{ maxWidth: 100 }}
      value={rating}
      readOnly
    />
      </CardFooter>
    </Card>
  );
};

export default ViewDetails;

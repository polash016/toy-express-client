import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Rating,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CategoryToy = ({ category, toys }) => {
  const categoryToys = toys.filter((toy) => toy.sub_category === category);

  return (
    <div className="grid grid-cols-3 mt-8">
      {categoryToys.map((toy) => (
        <Card key={toy._id} className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={toy.picture_url}
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {toy.name}
            </Typography>
            <Typography className='mb-2'>
            <span>Price:</span> ${toy.price}
            </Typography>
            <Typography>
              {toy.rating}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link to={`toys/${toy._id}`}><Button>View Details</Button></Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CategoryToy;

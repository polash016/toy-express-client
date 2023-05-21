import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import AOS from 'aos';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const CategoryToy = ({ category, toys }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  const categoryToys = toys.filter((toy) => toy.sub_category === category);

  return (
    <div data-aos="zoom-in" className="grid grid-cols-3 mt-8">
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
            <Rating
      style={{ maxWidth: 100 }}
      value={toy.rating}
      readOnly
    />
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link to={`toy/${toy._id}`}><Button>View Details</Button></Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CategoryToy;

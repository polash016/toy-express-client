import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

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
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CategoryToy;

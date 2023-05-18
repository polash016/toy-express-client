import { useLoaderData } from "react-router-dom";
import Toy from "./Toy";

const AllToys = () => {
  const toys = useLoaderData();

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub Category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Details</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <Toy key={toy._id} toy={toy}>
              {toy.name}
            </Toy>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;

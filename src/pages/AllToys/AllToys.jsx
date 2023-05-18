import { useLoaderData } from "react-router-dom";
import Toy from "./Toy";
import { useEffect, useState } from "react";

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
    <div className="overflow-x-auto w-full">
        <form onSubmit={handleSearch} className="mt-8 mb-8 flex justify-center items-center">
            <input onChange={(e) => setSearchText(e.target.value)} className="p-2 w-[30%]" type="text" placeholder="Search Here" />
            
            <input className="btn" type="submit" value="Search" />
        </form>
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

import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryToy from "./CategoryToy";

const CategoryTabs = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`https://a11-toy-express-server-polash016.vercel.app/toys`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const categories = [...new Set(toys.map((toy) => toy.sub_category))];

  return (
    <div>
      <Tabs>
        <TabList className="flex justify-between mt-8">
          {categories.map((category) => (
            <Tab key={category}>{category}</Tab>
          ))}
        </TabList>

        {categories.map((category) => (
          <TabPanel key={category}>
            <CategoryToy category={category} toys={toys}>
              {category}
            </CategoryToy>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default CategoryTabs;

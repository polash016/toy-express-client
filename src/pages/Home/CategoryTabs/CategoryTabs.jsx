import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';


const CategoryTabs = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, SetActiveTab] = useState('Sports');

    useEffect(() => {
        fetch(`http://localhost:5000/toys/${activeTab}`)
        .then(res => res.json())
        .then(data => setToys(data))
    },[activeTab])

    const handeTabClick = (category) => {
        SetActiveTab(category);
    } 
    return (
        <Tabs>
    <TabList className='flex justify-between '>
      <Tab onClick={() => handeTabClick('Sports')}>Sports Car</Tab>
      <Tab onClick={() => handeTabClick('Regular')}>Regular Car</Tab>
      <Tab onClick={() => handeTabClick('Truck')}>Truck</Tab>
      {/* <Tab onClick={() => handeTabClick('Mini Fire Truck')}>Truck</Tab> */}
    </TabList>

    <TabPanel>
      {
        toys.map(toy => <p key={toy._id}>{toy.name}</p>)
      }
    </TabPanel>
    {/* <TabPanel>
      <h2>Regular Car</h2>
    </TabPanel>
    <TabPanel>
      <h2>Truck</h2>
    </TabPanel> */}
  </Tabs>
    );
};

export default CategoryTabs;
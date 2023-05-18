import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';


const CategoryTabs = () => {
    return (
        <Tabs>
    <TabList className='flex justify-between '>
      <Tab>Sports Car</Tab>
      <Tab>Regular Car</Tab>
      <Tab>Truck</Tab>
    </TabList>

    <TabPanel>
      <h2>Sports Car</h2>
    </TabPanel>
    <TabPanel>
      <h2>Regular Car</h2>
    </TabPanel>
    <TabPanel>
      <h2>Truck</h2>
    </TabPanel>
  </Tabs>
    );
};

export default CategoryTabs;
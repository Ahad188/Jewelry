import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import usejewelry from '../../../hookes/usejewelry';
import PopularCard from './PopularCard';

const Popular = () => {
     const [products] = usejewelry()
     // console.log(products);
     const neckless = products.filter(item => item.category === 'Necklace');
     const ring = products.filter(item => item.category === 'Ring');
     const bracelet = products.filter(item => item.category === 'Bracelet');
     console.log(neckless);
     console.log(ring);
     console.log(bracelet);
  return (
    <div className="container"> 
    {/* <h3 className='text-center text-xl'> Popular </h3> */}
    <Tabs className='mx-auto w-[1200px] my-10'>
    <TabList className='mx-auto md:w-[500px] md:text-xl text-orange-500'>
      <Tab>Neckless</Tab>
      <Tab>Ring</Tab>
      <Tab>Bracelet</Tab>
       
    </TabList>

    <TabPanel className='my-10'>
       <PopularCard items={neckless}></PopularCard>
    </TabPanel>
    <TabPanel>
    <PopularCard items={ring}></PopularCard>
    </TabPanel>
    <TabPanel>
    <PopularCard items={bracelet}></PopularCard>
    </TabPanel>
    
    
  </Tabs>
    
    </div>
  )
}

export default Popular
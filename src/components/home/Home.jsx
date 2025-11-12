
import About from '../About';
import Leadership from '../Leadership';

import News from '../News';

import { VillageStatisticsComponents } from '../VillageComponents';

const Home = () => {
  return (
    <>
    <About />
    <Leadership />
      {/* <Hero /> */}
      <News />
      {/* <Awards /> */}
      {/* <Achievements /> */}
    
      <VillageStatisticsComponents language="mr" />
    </>
  );
};

export default Home;


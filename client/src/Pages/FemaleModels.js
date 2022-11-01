import { Fragment } from "react";
import Layout from '../Component/UI/Layout';
import Mainimg from '../Component/UI/Mainimg';
import OurModels from "../Component/UI/OurModels";
import femImg1 from '../images/femalemodel13.jpg';
import femImg2 from '../images/femalemodel16.jpg';
import femImg3 from '../images/femalemodel11.jpg';
import styles from './FemaleModels.module.css';

const FemaleModels = (props) =>{
  const modelImgs = [
   {
      images:femImg1,
      images2:femImg2,
      images3:femImg3
   }
];
    return (
       <Fragment>
         <main>
          <Layout>
             <Mainimg className={styles['main-img']}/>
             <OurModels imgs={modelImgs}/>
          </Layout>
         </main>
       </Fragment>
    )
};

export default FemaleModels
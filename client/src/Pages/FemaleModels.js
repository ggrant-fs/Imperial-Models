import { Fragment } from "react";
import Layout from '../Component/UI/Layout';
import Mainimg from '../Component/UI/Mainimg';
import OurModels from "../Component/UI/OurModels";
import styles from './FemaleModels.module.css';

const FemaleModels = (props) =>{
    return (
       <Fragment>
         <main>
          <Layout>
             <Mainimg className={styles['main-img']}/>
             <OurModels/>
          </Layout>
         </main>
       </Fragment>
    )
};

export default FemaleModels
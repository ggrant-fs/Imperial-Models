import { Fragment } from "react";
import Layout from '../Component/UI/Layout';
import Mainimg from '../Component/UI/Mainimg';
import styles from './FemaleModels.module.css';

const FemaleModels = (props) =>{
    return (
       <Fragment>
         <main>
          <Layout>
             <Mainimg className={styles['main-img']}/>
          </Layout>
         </main>
       </Fragment>
    )
};

export default FemaleModels
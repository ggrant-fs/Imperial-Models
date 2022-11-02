import { Fragment } from "react"
import Layout from "../Component/UI/Layout";
import MainImg from "../Component/UI/Mainimg";
import OurModels from "../Component/UI/OurModels";
import maleImg1 from "../images/malemodel3.jpg";
import maleImg2 from "../images/malemodel4.jpg";
import maleImg3 from "../images/malemodel5.jpg";
import styles from "./MaleModels.module.css";

const MaleModels = (props) =>{
  const modelImgs = [
    {
      images:maleImg1,
      images2:maleImg2,
      images3:maleImg3
    }
  ]
      return (
        <Fragment>
          <Layout>
            <MainImg className={styles['main-img']}/>
            <OurModels imgs={modelImgs}/>
          </Layout>
        </Fragment>
      )
};

export default MaleModels;

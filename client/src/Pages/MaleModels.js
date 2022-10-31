import { Fragment } from "react"
import Layout from "../Component/UI/Layout";
import MainImg from "../Component/UI/Mainimg";
import OurModels from "../Component/UI/OurModels";
import styles from "./MaleModels.module.css";

const MaleModels = (props) =>{
      return (
        <Fragment>
          <Layout>
            <MainImg className={styles['main-img']}/>
            <OurModels/>
          </Layout>
        </Fragment>
      )
};

export default MaleModels;

import Layout from "../Component/UI/Layout";
import MainImg from "../Component/UI/Mainimg";
import OurModels from "../Component/UI/OurModels";
import MainImgMobile from "../images/malemodel2.jpg";
import maleImg1 from "../images/malemodel3.jpg";
import maleImg2 from "../images/malemodel4.jpg";
import maleImg3 from "../images/malemodel5.jpg";
import styles from "./MaleModels.module.css";

const MaleModels = (props) =>{
  const modelImgs = [
    {
    image1:maleImg1,
    image2:maleImg2,
    image3:maleImg3
    }
  ]
      return (
          <Layout>
            <main>
            <MainImg images={MainImgMobile} className={`${styles["male-img"]} ${styles["main-img"]}`}/>
            <OurModels imgs={modelImgs}/>
            </main>
          </Layout>
      )
};

export default MaleModels;

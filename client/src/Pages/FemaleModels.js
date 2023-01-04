import Layout from '../Component/UI/Layout';
import MainImg from '../Component/UI/MainImg';
import OurModels from "../Component/UI/OurModels";
import JoinUs from "../Component/UI/JoinUs";
import femImg1 from '../images/femalemodel13.jpg';
import femImg2 from '../images/femalemodel16.jpg';
import femImg3 from '../images/femalemodel11.jpg';
import femImg19 from '../images/femalemodel19.jpg';
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
          <Layout>
         <main>
             <MainImg images={femImg19} className={`${styles["fem-img"]} ${styles["main-img"]}`}/>
             <OurModels imgs={modelImgs}/>
             <JoinUs/>
         </main>
          </Layout>
    )
};

export default FemaleModels
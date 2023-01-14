import Layout from '../Component/UI/Layout';
import MainImg from '../Component/UI/Mainimg';
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
      image1:femImg1,
      image2:femImg2,
      image3:femImg3
   }
]


// useEffect(()=>{
//     const fetchImage = async() =>{
//         const url = "https://i.imgur.com/Al9JO85.jpg";
//         const response = await fetch(url);
//         const imageBlob = await response.blob();
//         const imageURL = URL.createObjectURL(imageBlob);
//         console.log(imageURL)
//         setImage(imageURL);
//     }
//     fetchImage()
//     .catch(console.error())
// },[]);

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
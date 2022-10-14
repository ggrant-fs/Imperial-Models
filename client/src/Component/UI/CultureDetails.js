import { Fragment } from "react";
import styles from './CultureDetails.module.css';
// import femalemodel2 from '../../images/featuredimg2.jpg';
import femalemodel3 from '../../images/femalemodel3.jpg';
// import femaleModel9 from '../../images/femalemodel9.jpg';

const CultureDetails = (props) =>{
    return (
        <Fragment>
           <div className={styles['culture__img-container']}>
              <img className={styles['culture__main-img']} src={femalemodel3} alt=''/>
           </div>
            <div className={styles['culture__img-container2']}> </div>
            <div className={styles['culture__img-container3']}></div>
        </Fragment>
    )
};

export default CultureDetails;
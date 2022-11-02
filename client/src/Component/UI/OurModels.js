import React from 'react';
import { Fragment } from 'react';
import styles from './OurModels.module.css';

const OurModels = (props)=>{
    const imgs = props.imgs;

    return (
      <Fragment>
      {imgs.map((img)=>(
            <div className={styles.container}>
               <div className={styles.models}>
                {<img className={styles.imgtag}src={img.images} alt=""/>}
               </div>
               <div className={styles.models}>
                {<img className={styles.imgtag}src={img.images2} alt=""/>}
               </div>
               <div className={styles.models}>
                {<img className={styles.imgtag}src={img.images3} alt=""/>}
               </div>
            </div>
           ))}
        </Fragment>
    ) 
}

export default OurModels;
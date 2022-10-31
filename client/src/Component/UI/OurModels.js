import React from 'react';
import { Fragment } from 'react';
import styles from './OurModels.module.css';

const OurModels = (props)=>{
 
    return (
        <Fragment>
           <div className={styles.container}>
             <div className={styles.models}></div>
             <div className={styles.models}></div>
             <div className={styles.models}></div>
           </div>
        </Fragment>
    ) 
}

export default OurModels;
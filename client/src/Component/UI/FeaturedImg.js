import React from 'react';
import styles from './FeaturedImg.module.css';

const FeaturedImg =()=>{
    return (
        <React.Fragment>
        <div className={styles['featured-photos']}>
            <div className={styles['featured-photos--image1']}>image 1</div>
            <div className={styles['featured-photos--image2']}>image 2</div>
        </div>
        </React.Fragment>
    )
};

export default FeaturedImg;



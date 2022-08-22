import React from 'react';
import styles from './FeaturedImg.module.css';

const FeaturedImg = () =>{
    return (
        <React.Fragment>
        <section className={styles['featured-photos']}>
            <div className={styles['featured-photos--image1']}>
                image 1 
                {/* background image should inlcude a male model */}
                {/* include a button that will redirect to men's wear */}
            </div>
            <div className={styles['featured-photos--image2']}>
                image 2
                {/* background image should include a famale model */}
                {/* include a button that will redirect to women's wear */}
            </div>
        </section>
        </React.Fragment>
    )
};

export default FeaturedImg;



import { Fragment } from 'react';
import React from 'react';
import maleModel1 from '../../images/femalemodel12.jpg';
import styles from './Introduction.module.css';

const Introduction = () =>{
    return (
        <Fragment>
        <div className={styles.intro}>
            <div className={styles.intro__container}>
                <img src={maleModel1} alt=' ' className={styles.intro__img}/>
            </div>
            <div className={styles.intro__decription}></div>
        </div>
        </Fragment>
    )
};

export default Introduction;
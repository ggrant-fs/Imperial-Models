import React from 'react';
import styles from './Introduction.module.css';

const Introduction = () =>{
    return (
        <React.Fragment>
        <div className={styles.intro}>
            <div className={styles.intro__img}></div>
            <div className={styles.intro__decription}>
                <p></p>
            </div>
        </div>
        </React.Fragment>
    )
};

export default Introduction;
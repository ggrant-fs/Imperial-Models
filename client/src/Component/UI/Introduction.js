import React from 'react';
import styles from './Introduction.module.css';

const Introduction = () =>{
    return (
        <React.Fragment>
        <section className={styles.intro}>
            <div className={styles.intro__img}></div>
            <div className={styles.intro__decription}>
                <p></p>
            </div>
        </section>
        </React.Fragment>
    )
};

export default Introduction;
import React from 'react';
import styles from './Introduction.module.css';

const Introduction = () =>{
    return (
        <React.Fragment>
        <section className={styles.intro}>
            <div className={styles.intro__img}></div>
            <article className={styles.intro__decription}>
                <h2 className={styles.intro__title}>Introduction title goes here</h2>
                <p></p>
            </article>
        </section>
        </React.Fragment>
    )
};

export default Introduction;
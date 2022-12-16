import React from 'react';
import { Fragment } from 'react';
import styles from './JoinUs.module.css';
const JoinUs = (props)=>{

    // const test = document.querySelector('.joinUs__content').style.display ='hidden';

    return (
        <Fragment>
            <div className={`${styles['joinUs']} ${styles[props.className]}`}>
                <div className={styles['joinUs__content']}>
                {/* <i class="gg-arrow-left-o"></i>
                <i class="gg-arrow-right-o"></i> */}
                    <h1> Join New York City's Number One Model Mangement Agency</h1>
                    <button className={styles['joinUs__button']}>Join us </button>
                </div>
            </div>
        </Fragment>
    )
}

export default JoinUs;
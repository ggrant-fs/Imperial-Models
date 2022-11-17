import React from 'react';
import { Fragment } from 'react';
import styles from './JoinUs.module.css';
const JoinUs = (props)=>{
    return (
        <Fragment>
            <div className={`${styles['joinUs']} ${styles[props.className]}`}>
                <div className={styles['joinUs__content']}></div>
            </div>
        </Fragment>
    )
}

export default JoinUs;
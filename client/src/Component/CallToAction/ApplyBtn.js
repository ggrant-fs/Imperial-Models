import { Fragment } from 'react';
import React from 'react';
import styles from './ApplyBtn.module.css';

const ApplyBtn = (props) => {
    return (
        <Fragment>
           <button className={styles.btn}>Apply</button>
        </Fragment>
    )
}

export default ApplyBtn;
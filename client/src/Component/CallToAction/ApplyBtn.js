import React from 'react';
import styles from './ApplyBtn.module.css';

const ApplyBtn = (props) => {
    return (
        <React.Fragment>
           <button className={styles.btn}>Apply</button>
        </React.Fragment>
    )
}

export default ApplyBtn;
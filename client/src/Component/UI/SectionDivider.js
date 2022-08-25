import React from 'react';
// import styles from './SectionDivider.module.css';


const SectionDivider = (props) =>{
    return (
        <React.Fragment>
            <div className={`${props.className}`}>
              {props.children}
            </div>
        </React.Fragment>
    )
}

export default SectionDivider;
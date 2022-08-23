import React from 'react';
import styles from './Footer.module.css';

const Footer = (props) =>{
    return (
        <React.Fragment>
          <footer className={styles['main-footer']}>
             <h2>This is the footer</h2>
          </footer>
        </React.Fragment>
    )
}

export default Footer;
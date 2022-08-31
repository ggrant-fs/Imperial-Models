import { Fragment } from 'react';
import React from 'react';
import styles from './Footer.module.css';

const Footer = (props) =>{
    return (
        <Fragment>
          <footer className={styles['main-footer']}>
             <h2>This is the footer</h2>
          </footer>
        </Fragment>
    )
}

export default Footer;
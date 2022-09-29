import { Fragment } from 'react';
import React from 'react';
import styles from './Footer.module.css';

const Footer = (props) =>{
    return (
        <Fragment>
          <footer className={styles['main-footer']}>
            <div className={styles['main-footer__triangle']}></div>
          </footer>
        </Fragment>
    )
}

export default Footer;
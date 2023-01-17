import { Fragment } from 'react';
import React from 'react';
import styles from './Footer.module.css';

const Footer = (props) =>{
    return (
        <Fragment>
          <footer className={styles['main-footer']}>
            <div className={styles["items-container"]}>
              <ul>
                <li className={styles["footer__item"]}>Newsletter</li>
                <li className={styles["footer__item"]}>Fashion</li>
                <li className={styles["footer__item"]}>About</li>
                <li className={styles["footer__item"]}>Contact Us</li>
                <li className={styles["footer__item"]}>Subscribe</li>
              </ul>
            </div>
            <div className={styles["items-container"]}>
             <ul>
              <li className={styles["footer__item"]}>Fashion</li>
              <li className={styles["footer__item"]}>Runway</li>
              <li className={styles["footer__item"]}>Milan</li>
              <li className={styles["footer__item"]}>Paris</li>
             </ul>
            </div>
          </footer>
        </Fragment>
    )
}

export default Footer;
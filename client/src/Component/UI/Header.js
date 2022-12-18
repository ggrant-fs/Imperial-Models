import { Fragment } from 'react';
import React from 'react';
import MenuButton from './MenuButton';
import styles from './Header.module.css';

const Header = (props) =>{
    return (
        <Fragment>
        <header className={styles['header']}>
           <MenuButton className={styles['header__logo']}/>
           <div className={styles["header__menu__btn"]}>
           <i className="gg-menu"></i>
           </div>
        </header>
        {/* ========================================
        Then navigation componenet goes here.
        I'm putting it into it's own component 
        because of the amount of functionality 
        that will go into the navigation, it will
        also reduce the amount of html and jsx in
        the module
        ======================================== */}
        </Fragment>
    )
};

export default Header;
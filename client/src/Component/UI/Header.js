import { Fragment } from 'react';
import React from 'react';
import MenuButton from './MenuButton';
import styles from './Header.module.css';

const Header = (props) =>{
    return (
        <Fragment>
        <header className={styles['main-header']}>
           <MenuButton className={styles['main-header__menu-btn']}/>
        </header>
        </Fragment>
    )
};

export default Header;
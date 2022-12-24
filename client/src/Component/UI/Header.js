import { Fragment} from 'react';
import React from 'react';
import MenuButton from './MenuButton';
import styles from './Header.module.css';

const Header = (props) =>{

    return (
        <Fragment>
        <header className={styles['header']}>
           <MenuButton className={styles['header__logo']} />
           <div className={styles["header__menu__btn"]} onClick={props.openNav}>
           <i class="gg-menu"></i>
           </div>
        </header>
        </Fragment>
    )
};

export default Header;
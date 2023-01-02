import { Fragment} from "react";
import {NavLink} from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = (props) =>{
  
    return (
        <Fragment>
            <nav className={styles.nav} onClick={props.sideBar}>
                <ul>
                    <li><NavLink to='/' activeClassName={styles.activeStyling}>Home</NavLink></li>
                    <li><NavLink to='#' activeClassName={styles.activeStyling}>About</NavLink></li>
                    <li><NavLink to='/models-females' activeClassName={styles.activeStyling}>Models</NavLink></li>
                    <li ><NavLink to='/models-males' activeClassName={styles.activeStyling} >Male Models</NavLink></li>
                    <li><NavLink to='/contact' activeClassName={styles.activeStyling}>Contact</NavLink></li>
                </ul>
            </nav>
        </Fragment>
    )
};

export default Nav;
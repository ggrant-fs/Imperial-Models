import { Fragment } from "react";
import {NavLink} from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = (props) =>{
    return (
        <Fragment>
            <nav className={styles.nav}>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/models-females'>Models</NavLink></li>
                    <li><NavLink to='/models-males'>Male Models</NavLink></li>
                    {/* <li><NavLink to='/contact'>Contact</NavLink></li> */}
                </ul>
            </nav>
        </Fragment>
    )
};

export default Nav;
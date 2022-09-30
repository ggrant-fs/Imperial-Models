import { Fragment } from "react";
import styles from './Backdrop.module.css';

const Backdrop =(props)=>{
    return(
        <Fragment>
          <div className={styles.backdrop}></div>
        </Fragment>
    )
}

export default Backdrop;
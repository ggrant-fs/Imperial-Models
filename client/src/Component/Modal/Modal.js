import React, { Fragment } from "react";
import { ReactDOM } from "react-dom";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay"

const portal = document.getElementById('overlays');

const Modal =(props)=>{

    return(
        <Fragment>
             {ReactDOM.createPortal(<Backdrop/>, portal)}
             {ReactDOM.createPortal(<ModalOverlay/>, portal)}
        </Fragment>
    )
}

export default Modal;
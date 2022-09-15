import { Fragment } from "react";
import React from 'react';
import styles from './SubscriptionModal.module.css';

const SubscriptionModal = (props) =>{

//    const subscriptionChangeHandler = (event) =>{
//      event.preventDefault();

//    }

//    const submitChangeHandler = (event) =>{
//     event.preventDefault();
//    }

    return (
        <Fragment>
            <div className={`${styles['subscription_modal']} ${props.className}`} >

            </div>
        </Fragment>
    )
}

export default SubscriptionModal;

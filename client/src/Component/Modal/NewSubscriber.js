import { Fragment } from "react";
import React from "react";
import styles from './Newsubscriber.module.css';
import SubscriptionModal from "./SubscriptionModal";

const NewSubscriber = (props) =>{
    return (
        <Fragment>
            <SubscriptionModal  className={styles['newSubscriber-container']}>

            </SubscriptionModal>
        </Fragment>
    )
}

export default NewSubscriber;
import { Fragment } from "react";
import React,{useState} from 'react';
import styles from './SubscriptionModal.module.css';


const SubscriptionModal = (props) =>{
    const [background,setBackground] =useState('');


   const subscriptionChangeHandler = (event) =>{
     event.preventDefault();
     if(event){
        setBackground("none");
     }
   }

//    const submitChangeHandler = (event) =>{
//     event.preventDefault();
//    }

    return (
        <Fragment>
            <div 
            className={`${styles['subscription_modal']} ${props.className}`} 
            onClick={subscriptionChangeHandler} 
            style={{'display': background}}
            >
                {props.children}
            </div>
        </Fragment>
    )
}

export default SubscriptionModal;

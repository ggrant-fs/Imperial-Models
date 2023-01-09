import {useEffect, useState, useRef} from 'react';
import styles from './Contact.module.css';
import pic from '../images/malemodel5.jpg';
import Layout from '../Component/UI/Layout';


const Contact = (props) =>{
  const firstNameInput = useRef('');
  const lastNameInput = useRef('');
  const emailInput = useRef('');
  const phoneNumberInput = useRef('');

  const [formValues, setFormValue] =useState({
   firstName:'',
   lastName:'',
   email:'',
   phoneNumber:''
});

const postData ={
    firstName: firstNameInput.current.value,
    lastName: lastNameInput.current.value,
    email: emailInput.current.value,
    phoneNumber: phoneNumberInput.current.value
}


const postRequest = async() =>{
   const url = 'https://imperial-models-default-rtdb.firebaseio.com/contact.json';
   const response = await fetch(url,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    
    body:JSON.stringify(postData)
   });
   const responseData = await response.json();
   console.log(responseData)
  }

  useEffect(()=>{
    postRequest()
  },[])



const firstNameChangeHandler = event =>{
  event.preventDefault();
  setFormValue(prevState =>({
    ...prevState,
       firstName:event.target.value,
      }));
console.log(event.target.value)
}

const lastNameChangeHandler = event =>{
  event.preventDefault();
  setFormValue((prevState=>({
    ...prevState,
       lastName:event.target.value
  })));
  setFormValue('');
    console.log(event.target.value);
}

const emailChangeHandler = event =>{
  event.preventDefault();
  setFormValue((prevState=>({
    ...prevState,
       email:event.target.value
  })));
  setFormValue('');
     console.log(event.target.value)
}

const phoneNumChangeHandler = event =>{
  event.preventDefault();
  setFormValue((prevState=>({
    ...prevState,
       phoneNumber:event.target.value
  })))
  setFormValue('');
    console.log(event.target.value)
}

const submitHandler = event =>{
  event.preventDefault();
  setFormValue(prevState=>({
    ...prevState,firstName:'',
    lastName:'',
     email:'',
     phoneNumber:''
    }));   
}
   
  
    return (
          <Layout>
            <main>
               <div className={styles["content-container"]}>
                  <form onSubmit={submitHandler}>
                    <div className={styles["label-wrapper"]}>
                    <label htmlfor="first-name">First Name</label>
                    <input 
                    type="text" 
                    id="first-name"
                    value={formValues.firstName}
                    onChange={firstNameChangeHandler}
                    ref={firstNameInput}
                    />
                    </div>
                    <div className={styles["label-wrapper"]}>
                    <label htmlfor="last-name" >Last Name</label>
                    <input 
                    type="text" 
                    id="last-name" 
                    value={formValues.lastName}
                    onChange={lastNameChangeHandler}
                    ref={lastNameInput}
                    />
                    </div>
                    <div className={styles["label-wrapper"]}>
                    <label htmlfor="email">Email</label>
                    <input 
                    type="email" 
                    id="email"
                    value={formValues.email}
                    onChange={emailChangeHandler}
                    ref={emailInput}
                    />
                    </div>
                    <div className={styles["label-wrapper"]}>
                    <label htmlFor='phone-number'>Phone</label>
                    <input 
                    type="tel" 
                    id="phone-number"
                    value={formValues.phoneNumber}
                    onChange={phoneNumChangeHandler}
                    ref={phoneNumberInput}
                    />
                    </div>
                    <button type="submit" className={styles["submit-btn"]} onClick={postRequest}>submit</button>
                  </form>
                  <div className={styles.container}>
                    <img className={styles["contact-img"]} src={pic} alt=''/>  
                  </div>
               </div>
            </main>
          </Layout>
    )
}

export default Contact;

import {useState} from 'react';
import styles from './Contact.module.css';
import pic from '../images/malemodel5.jpg';
import Layout from '../Component/UI/Layout';


const Contact = (props) =>{
const [formValues, setFormValue] =useState({
   firstName:'',
   lastname:'',
   email:'',
   phoneNumber:''
})

const inputChangeHandler = event =>{
  event.preventDefault();
  setFormValue(prevState =>({
    ...prevState,
      firstName:event.target.value
    }))
    console.log(event.target.value)
}


   //submit form handler function
   
  
    return (
          <Layout>
            <main>
               <div className={styles["content-container"]}>
                  <form >
                    <div className={styles["label-wrapper"]}>
                    <label htmlfor="first-name">First Name</label>
                    <input 
                    type="text" 
                    id="first-name"
                    value={formValues.firstName}
                    onChange={inputChangeHandler}
                    />
                    </div>
                    <div className={styles["label-wrapper"]}>
                    <label htmlfor="last-name" >Last Name</label>
                    <input 
                    type="text" 
                    id="last-name" 
                    value={formValues.lastName}
                    onChange={inputChangeHandler}
                    />
                    </div>
                    <div className={styles["label-wrapper"]}>
                    <label htmlfor="email">Email</label>
                    <input 
                    type="email" 
                    id="email"
                    value={formValues.email}
                    onChange={inputChangeHandler}
                    />
                    </div>
                    <div className={styles["label-wrapper"]}>
                    <label htmlFor='phone-number'>Phone</label>
                    <input 
                    type="tel" 
                    id="phone-number"
                    value={formValues.phoneNumber}
                    onChange={inputChangeHandler}
                    />
                    </div>
                    <button type="submit" className={styles["submit-btn"]}>submit</button>
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

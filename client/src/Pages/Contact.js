import styles from './Contact.module.css';
import pic from '../images/malemodel5.jpg';
import Layout from '../Component/UI/Layout';


const Contact = (props) =>{


   //submit form handler function
  
    return (
          <Layout>
            <main>
               <div className={styles["content-container"]}>
                  <form className={styles.form}>
                    <div className={styles["label-container"]}>
                      <label htmlFor="first-name">First Name:</label>
                    </div>
                    <div>
                      <input type='text' id="first-name"/>
                    </div>
                    <div className={styles["label-container"]}>
                      <label htmlFor="last-name">Last Name:</label>
                    </div>
                    <div>
                      <input type='text' id="last-name"/>
                    </div>
                    <div className={styles["label-container"]}>
                      <label htmlFor="email">Email:</label>
                    </div>
                    <div>
                      <input type='email' id="email"/>
                    </div>
                    <div className={styles["label-container"]}>
                      <label htmlFor="phone-number">Phone:</label>
                    </div>
                    <div>
                      <input type='tel' id='phone-number'/>
                    </div>
                    <button type='submit'>submit</button>
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

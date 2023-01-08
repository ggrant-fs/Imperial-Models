import styles from './Contact.module.css';
import pic from '../images/malemodel5.jpg';
import Layout from '../Component/UI/Layout';


const Contact = (props) =>{


   //submit form handler function
   //testing 
  
    return (
          <Layout>
            <main>
               <div className={styles["content-container"]}>
                  <form >
                    <div className={styles["label-wrapper"]}>
                    <label htmlfor="first-name">First Name</label>
                    <input type="text" id="first-name"/>
                    </div>
                    <div className={styles["label-wrapper"]}>
                    <label htmlfor="last-name" >Last Name</label>
                    <input type="text" id="last-name" />
                    </div>
                    <div className={styles["label-wrapper"]}>
                    <label htmlfor="email">Email</label>
                    <input type="email" id="email"/>
                    </div>
                    <div className={styles["label-wrapper"]}>
                    <label htmlFor='phone-number'>Phone</label>
                    <input type="tel" id="phone-number"/>
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

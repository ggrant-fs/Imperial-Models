import styles from './Contact.module.css';
import pic from '../images/malemodel5.jpg';
import Layout from '../Component/UI/Layout';


const Contact = (props) =>{


   //submit form handler function
  
    return (
          <Layout>
            <main>
               <div className={styles["content-container"]}>
                  <form >
                    <div className={styles.testcontianer}>
                    <label htmlfor="first-name">first name</label>
                    </div>
                    <input type="text" id="first-name"/>
                    <label htmlfor="last-name" >second name</label>
                    <input type="text" id="last-name" />

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

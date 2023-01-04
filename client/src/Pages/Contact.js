import styles from './Contact.module.css';
import pic from '../images/malemodel5.jpg';
import Layout from '../Component/UI/Layout';


const Contact = (props) =>{
  
    return (
          <Layout>
            <main>
               <div className={styles["content-container"]}>
                  <form className={styles.form}>
                    <div>
                      <label htmlFor="name">Name</label>
                      <input type='text'/>
                    </div>
                    <div>
                      <label htmlFor="email">Email</label>
                      <input type='email'/>
                    </div>
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

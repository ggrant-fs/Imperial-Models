import { Fragment} from "react";
import styles from './Contact.module.css';
import pic from '../images/malemodel5.jpg';
import Layout from '../Component/UI/Layout';


const Contact = (props) =>{
  
    return (
        <Fragment>
          <Layout>
            <main>
               <div>
                  <form className={styles.form}></form>
                  <div className={styles.container}>
                    <img className={styles["contact-img"]} src={pic} alt=''/>  
                  </div>
               </div>
            </main>
          </Layout>
        </Fragment>
    )
}

export default Contact;

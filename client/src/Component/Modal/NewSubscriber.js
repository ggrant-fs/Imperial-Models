import Modal from './Modal';
import femaleModel5 from '../../images/femalemodel5.jpg';
import styles from './NewSubscriber.module.css';

const NewSubscriber = (props) =>{
    return (
        <Modal onClose={props.onClose}>
          <div className={styles.subscriber}>
            <img src={femaleModel5} alt='female modal' className={styles['modal-image']}/>
            <form className={styles.subscriber__form}>
              <div className={styles.subscriber__cta}>
                    <p>Subscribe for a chance to join us at this years New York Fashion Week!</p>
              </div>
             <button className={styles.subscriber__btn} >Subscribe</button>
            </form>
          </div>
        </Modal>
    )
}

export default NewSubscriber;
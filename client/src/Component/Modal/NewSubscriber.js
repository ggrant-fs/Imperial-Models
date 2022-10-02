import Modal from './Modal';
import femaleModel5 from '../../images/femalemodel8.jpg';
import styles from './NewSubscriber.module.css';

const NewSubscriber = (props) =>{
    return (
        <Modal onClose={props.onClose}>
          <div className={styles.subscriber}>
            <img src={femaleModel5} alt='female modal' className={styles['modal-image']}/>
          </div>
        </Modal>
    )
}

export default NewSubscriber;
import Modal from './Modal';
// import styles from './Newsubscriber.module.css';

const NewSubscriber = (props) =>{
    return (
        <Modal onClose={props.onClose}>
          <div>
            <h3>test modal</h3>
          </div>
        </Modal>
    )
}

export default NewSubscriber;
import react from 'react';
import styles from './Mainimg.module.css';

const MainImg = (props) =>{
    return (
            <div className={`${styles['default-styling']} ${props.className}`}> </div>
    )
};

export default MainImg;
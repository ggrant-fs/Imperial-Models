import react from 'react';
import styles from './Mainimg.module.css';

const MainImg = (props) =>{
    return (
            <div className={`${styles['default-styling']} ${props.className}`}> 
               {/* need to raise the state when the arrows are clicked so both 
               FemaleModels.js and MaleModels.js can update the state of the Mainimg 
               Componenet */}
            </div>
    )
};

export default MainImg;
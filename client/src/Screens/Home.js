import React from 'react';
import Header from "../Component/UI/Header";
import Footer from "../Component/UI/Footer";
import FeaturedImg from '../Component/UI/FeaturedImg';
import Introduction from '../Component/UI/Introduction';
import SectionDivider from '../Component/UI/SectionDivider';
import styles from './Home.module.css';


const Home = (props) =>{
    return (
        <React.Fragment>
           <Header />
           {/* the conditional render of the SignUpCTA component goes here */}
           <FeaturedImg />
           <Introduction />
            <SectionDivider className={styles['blog-section']}/>
           <Footer/>
        </React.Fragment>
    )
}

export default Home;
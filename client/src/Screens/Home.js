import React from 'react';
import Header from "../Component/UI/Header";
import { Fragment } from 'react';
import Footer from "../Component/UI/Footer";
import FeaturedImg from '../Component/UI/FeaturedImg';
import Introduction from '../Component/UI/Introduction';
import SectionDivider from '../Component/UI/SectionDivider';
import styles from './Home.module.css';


const Home = (props) =>{
    return (
        <Fragment>
           <Header />
           <FeaturedImg />
            <SectionDivider>
                <div>
                    <h3 className={styles['section-block_title']}>The Brand</h3>
                </div>
            </SectionDivider>
           <Introduction />
           <SectionDivider>
                <div>
                    <h3 className={styles['section-block_title']}>The Culture</h3>
                </div>
            </SectionDivider>
           <Footer/>
        </Fragment>
    )
}

export default Home;
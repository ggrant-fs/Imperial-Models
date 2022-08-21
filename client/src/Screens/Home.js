import React from 'react';
import Header from "../Component/Header";
import FeaturedImg from '../Component/FeaturedImg';
import Introduction from '../Component/Introduction';

const Home = (props) =>{
    return (
        <React.Fragment>
           <Header />
           <FeaturedImg />
           <Introduction />
        </React.Fragment>
    )
}

export default Home;
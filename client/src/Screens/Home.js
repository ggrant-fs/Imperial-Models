import React from 'react';
import Header from "../Component/UI/Header";
import Footer from "../Component/UI/Footer";
import FeaturedImg from '../Component/UI/FeaturedImg';
import Introduction from '../Component/UI/Introduction';

const Home = (props) =>{
    return (
        <React.Fragment>
           <Header />
           {/* the conditional render of the SignUpCTA component goes here */}
           <FeaturedImg />
           <Introduction />
           <Footer />
        </React.Fragment>
    )
}

export default Home;
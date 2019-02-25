import "../components/share.css"
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Twitch from "./Twitch";
import Sponsors from "./Sponsors";
import Upcoming from "./Upcoming";
// import SocialMedia from "./SocialMedia";

const App = () => {
    return (
        <div className="body">
            <div className="header">
            <Header />
            </div>
            <div className="main">
            <Twitch />
            </div>
            <div className="left">
             <Sponsors/>
            </div>
            <div className="right">
              <Upcoming/>
            </div>
            <div className="footer">
            <Footer />
            </div>
        </div>
    )
}

export default App;
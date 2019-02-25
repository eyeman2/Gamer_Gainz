import '../components/share.css';
import React from 'react';
import icon from '../images/icon.png';
import SocialMedia from './SocialMedia';
// import '../components/Header.css';

const styles = {
    icon:{
        height: "200px",
        width: "200px"
    }
}

const Header = () => {
    return (
        <div className="header-body">
            <header>
                <a href="/home" className="header-brand"><img className="img-brand" style={styles.icon} src={icon} alt="esf" /></a>
                <nav className="header-group">
                    <a href="/merchandise" className="header-group__merch">Merchandise <span>|</span></a>
                    <a href="/aboutme" className="header-group__about">About Me</a>
                </nav>
            </header>
            <SocialMedia/>
            
        </div>
    )
}

export default Header;
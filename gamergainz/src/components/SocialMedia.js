import "../components/share.css";
import React from "react";
import twitch from "../images/Twitch.png";
import facebook from "../images/Facebook.png";
import insta from "../images/Instagram.png";
import raptr from "../images/raptr.jpeg";

const styles = {
    images: {
        height: "25px",
        width: "25px",
        marginTop: "2px",
        marginLeft: "2px"
    }
}
const SocialMedia = () => {
    return(
        <div className="social-body">
            <div className="social-body__wrap">
            <a href="/"><img style={styles.images} alt="twitch logo" src={twitch}/></a>
            <a href="/"><img style={styles.images} alt="facebook logo" src={facebook}/></a>
            <a href="/"><img style={styles.images} alt="insta logo" src={insta}/></a>
            <a href="/"><img style={styles.images} alt="raptr logo" src={raptr}/></a>
            </div>
        </div>
    )
} 

export default SocialMedia;
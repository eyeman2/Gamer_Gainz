import React from 'react';
// import "../components/share.css";

const styles = {
    video:{
        height: "378px",
        width: "620px",
        margin: "50px 80px"
    }
}
const Twitch = () => {
    return (
        <div className="video-box">
            <iframe title="Chris efitt" src="https://player.twitch.tv/?autoplay=false&video=v385170954" frameBorder="0" allowFullScreen={true} scrolling="no" style={styles.video}>
            </iframe>
            <a href="https://www.twitch.tv/videos/385170954?tt_content=text_link&tt_medium=vod_embed" style={{padding:"2px 0px 4px", display:"block", fontWeight:"normal",fontSize:"1.3rem", textDecoration:"underline"}}>Watch Friday night Chill Vibes | LOL lvling against BOTS 
            </a>
        </div>
    )
}

export default Twitch;
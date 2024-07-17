import React from "react";
import "../styles/Music.css"
const Music = props => (
    <div className = "music-section" id="music-section">
        <h1>Music</h1>
        <span>Interviewers reading can stop here (unless you want some new tunes)</span>
        <div className="music-info">
            <div className="music-contact-info">
                <a href="https://www.instagram.com/ethannomiddlenamelam">
                    <img src="assets/instagram.png" alt="follow us" />
                </a>
                <br />
                <a href="https://www.youtube.com/channel/UCSsuc-_8laUQrkabS1iIrXQ?view_as=subscriber">
                    <img src="assets/youtube.png" alt="watch us" />
                </a>
                <br />
                <a href="https://www.youtube.com/channel/UCSsuc-_8laUQrkabS1iIrXQ?view_as=subscriber">
                    <img src="assets/spotify.png" alt="stream us " />
                </a>
            </div>
            <p> 
                This area of my website is under construction until I stop procrastinating and learn how to use Logic Pro. Check back later!
            </p>
            <div className="music-image-area">
                <img src="assets/about.jpg" alt="REVIVAL" />
            </div>
        </div>
        
    </div>
)
export default Music;
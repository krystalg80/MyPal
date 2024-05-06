import React from 'react';
import video from './dogs.mov';
import './Home.css'

function Home() {
    return (
        <div className="video-container">
            <video autoPlay loop muted>
                <source src={video} type="video/mp4" />   
            </video>
            <div className="text-overlay">
                <h1>Keeping one pet safe at a time with MyPal!</h1>
               
            </div>
            <div className="company-info">
                <div className="company-info-content">
                <h2>Why Us?</h2>
                <p>Did you know 10 million dogs are lost a year? From those missing dogs more than 80% are never found. Heartbreaking. MyPal was created to provide pet owners an affordable GPS Dog Collar that allows you to know your dogs whereabouts wherever and whenever! Help us prevent the grief of our lossed pets!  </p>
                </div>
            </div>
        </div>
    );
}

export default Home;

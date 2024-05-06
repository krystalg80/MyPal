import React from 'react';
import './Feature.css';
import img from './prototype.png'; // Import the image using img variable
import app from './app.png';
import screen from './screen.png';
function Feature() {
    return (
        <div className="features-container">
            <div className="feature">
                <img src={img} alt="Feature 1" className="feature-image" /> {/* Use img variable for image source */}
                <div className="feature-description">
                    <h2>The Vision</h2>
                    <p>This was our vision for what we wanted MyPal to be. Affordable Pricing and a 3 month Battery Life; longer than anywhere else. Personalized info Tag with the option to come in either Silver or Black. Made with Custom Leather. This is the future ti save our beloved pets. Join us for more!</p>
                </div>
            </div>
            <div className="application">
                <img src={app} alt="Application 1" className="application-image" /> {/* Use img variable for image source */}
                <div className="application-description">
                    <h2>The App</h2>
                    <p>Via Apple Store and Google Play; Here's how our MyPal application looks like. With a user-friendly interface, you can easily track your pet's location, set up safe zones, and receive notifications when your pet goes outside the designated area.</p>
                </div>
            </div>
            <div className="homescreen">
                <img src={screen} alt="homescreen 1" className="homescreen-image" /> {/* Use img variable for image source */}
                <div className="homescreen-description">
                    <h2>Home Screen</h2>
                    <p>Our homescreen provides quick access to important features of the MyPal app. You can see your pet's location in real-time, view historical location data, and customize settings to suit your preferences.</p>
                </div>
            </div>
            {/* Add more features as needed */}
        </div>
    );
}

export default Feature;

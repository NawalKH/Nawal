import "./about.scss";
import React from 'react'
import FadeInSection from "../FadeInSection";

export default function About() {
    return (
        <div className="about" id="about">
            
            <div className="left">
                <div className="wrapper">

                <h1>About me</h1>

                <FadeInSection>

                    <h2>
            I'm a software Engineer and a curious person, who's passionate about coding, Human-Computer Interactoin, Cats, and Music. 
            I love to stare at a not-so-bright screen while coding on a constant state of flow. Lately, I've been intrested in front-end development.
             Here are some of the technologies I've been working with:
                    </h2>

                    </FadeInSection>

                    <FadeInSection delay="1s">

                    <div className="tech">
            
            <ul>

                <li>Java</li>
                <li>Javascript</li>
                <li>Angular js</li>
                <li>React.js</li>
                
            </ul>
            

            

            <ul>
            <li>Node.js</li>
                <li>HTML & CSS</li>
                <li>SQL</li>
                <li>PHP</li>

            </ul>
            

            </div>
            </FadeInSection>
            
            </div>

            </div>

            <div className="right">
                <div className="imgContainer">
                <img src="assets/cat.gif"></img>
                </div>
            </div>

        </div>
    )
}

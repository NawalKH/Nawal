import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";
import FadeInSection from "../FadeInSection";


export default function Intro() {

    const textRef = useRef();

    useEffect(() => {

        init(textRef.current, {
             showCursor: true,
             loop:       false,
              strings: ['Nawal' ] })
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
            <FadeInSection>
                  <div className="imgContainer">
                      <img  src="assets/me.png" alt=""/>
                  </div>
                  </FadeInSection>
                  
              </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, it's</h2>
                    <h1> <span ref={textRef}></span></h1>
                    <FadeInSection delay="0.5s">
                    <h3>I like to create stuff sometimes</h3>
                    </FadeInSection>

                    <FadeInSection delay="0.8s">
                        <h4>I am a software engineer, passionate programmer and problem solver with analytical and creative mind.
                             Mostly intrested in Full stack development and HCI technology. </h4>
    
                        <div className="contactButton">
                   <a href="mailto:nalkhalifey@gmail.com" className="contact">             
                         Say Hello  
                        </a> 
                        </div>
                        </FadeInSection>                   
                
                </div>
               
            </div>
        </div>
    )
}

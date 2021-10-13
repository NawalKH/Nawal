import "./journey.scss";
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import FadeInSection from "../FadeInSection";
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';



export default function Journey() { 

    return (
        <div className="journey" id="journey">


            <FadeInSection>
                <div className="title">
            <h1>My Journey as a Software Engineer </h1>
            <h2>Education and Experince</h2>
            </div>
            </FadeInSection>


<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2014 - 2018"
    iconStyle={{ background: '#75a8b1', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">BACHELOR OF SOFTWARE ENGINEERING</h3>
    <h4 className="vertical-timeline-element-subtitle">Riyadh, Saudi Arabia</h4>
    <p>
    College of Computer and Information Science <br></br>King Saud University<br></br>GPA: 4.86
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="JUL 2017 - AUG 2017"
    iconStyle={{ background: '#75a8b1', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">SOFTWARE DEVELOPER TRAINEE</h3>
    <h4 className="vertical-timeline-element-subtitle">King Khalid University hospital and Reserach Center</h4>
    <p>
    - Gathered requirements and verified them from the client.<br></br>
    - Designed and developed a real-time multi-platform mobile application (Android-iOS) with a web-based Admin.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="JUL 2017 - AUG 2017"
    iconStyle={{ background: '#75a8b1', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">BCI MENTOR</h3>
    <h4 className="vertical-timeline-element-subtitle"> King Abdulaziz city for science and technology (KACST)</h4>
    <p>
      Supervised BCI-related reserach projects 
    </p>
  </VerticalTimelineElement>
  
</VerticalTimeline>
      
        </div>
    )
}

import "./projects.scss";
import FadeInSection from "../FadeInSection";

export default function Projects() {
  
const data= [
    {
        id:1,
        name: "AI News And Weather app",
        img: "assets/newsapp.jpg",
        sourceIcon:"assets/source.png",
        source:"https://nawalkh.github.io/AI-news-and-weather-app/",
        github:"https://github.com/NawalKH/AI-news-and-weather-app",
        desc:"a Voice Controlled React News and Weather forcast Webstite Application using Alan AI",
        langauges:"React js, Javascript, AlanAI"
    },
    {
        id:2,
        name: "CMR APP",
        img: "assets/CMRapp.png",
        sourceIcon:"",
        source:"",
        github:"https://github.com/NawalKH/CMRapp",
        desc:"an android application with a web-based admin that provides technical services to for researchers of the College of Medicine.",
        langauges:"java, Andriod Studio"
    },
    {
        id:3,
        name: "Buy and Sell Secondhand App ",
        img: "assets/Dlalah.png",
        sourceIcon:"",
        source:"",
        github:"https://github.com/NawalKH/Dlalah-app",
        desc:"an IOS marketplace mobile application that holds online auctions of various items, and serves as a place for buyers and sellers to come together and trade almost anything.",
        langauges:"Swift, Objective-C"
    },
    {
        id:4,
        name: "Homework Submission System",
        img: "assets/HWsubmission.jpg",
        sourceIcon:"assets/source.png",
        source:"https://homworksubmission.000webhostapp.com/",
        github:"https://github.com/NawalKH/Homework-Submission-System",
        desc:"A Web-based homework submission system has been developed to allow students to submit their homework across the Internet. This system is composed of 2 interfaces for teachers and students.",
        langauges:"PHP, JavaScript, HTML"
    }
];

    return (
        <div className="projects" id="projects">
            <FadeInSection>
            <h1>Projects</h1>
            </FadeInSection>
            <div className="container">

                {data.map((d)=>(
               
        <FadeInSection delay="0.5">
               <div className="card">
                    <div className="top">
                        <a href={d.source} target="_blank"><img src={d.sourceIcon} className="source"/></a>
                        <img src={d.img} className="projectpic" alt=""/>
                        <a href={d.github} target="_blank"> <img src="assets/github.png" className="github" alt=""/></a>
                    </div>
                    <div className="projectname">
                    <h3>{d.name}</h3> 
                    </div>
                    <div className="projectdesc">
                      {d.desc}
                    </div>
                    <div className="usedlanguages">
                        <h4>{d.langauges}</h4>
                    </div>
                </div>
            </FadeInSection>
                     ))};
            </div>
            
        </div>
    )
}

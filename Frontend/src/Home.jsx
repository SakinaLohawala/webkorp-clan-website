import './Home.css';
import adobe from "./assets/adobe.jpg";
import manage from "./assets/manageengine.jpg";
import microsoft from "./assets/micro.png";
import hubspot from "./assets/hubspot.jpg";
import aws from "./assets/aws.jpg";
import f5 from "./assets/f5.jpg";
import cisco from "./assets/cisco.jpg";
import cloudsek from "./assets/cloudsek.jpg";
import juniper from "./assets/juniper.jpg"
import salesforce from "./assets/salesforce.jpg";
import sophos from "./assets/sophos.jpg";
import sysdig from "./assets/sysdig.jpg";
import founder1 from "./assets/founder1.jpg";
import trellix from "./assets/trellix.jpg";
import founder2 from "./assets/founder2.jpg";
import founder3 from "./assets/founder3.jpg";
import founder4 from "./assets/founder4.jpg";
import allinone from "./assets/allinone.jpg";
import { useState } from "react";
import Half from "./Half.jsx"


function Home(){

    const [text, setText] = useState("Mobile App Development");
    const [h4text, setH4Text] = useState("Elevate your ideas into impactful, user-friendly mobile applications with our mobile app development services. We specialize in iOS, Android, and cross-platform apps, delivering secure, scalable, and high-performance solutions that boost user engagement and promote business growth. Our top mobile app development services are:");
    let [list, setList] = useState(["Android App Development", "IOS App Development","Cross-Platform App Development", "Enterprise App Development", "On-Demand App Development"]);
    function web(){
        setList("");
        setText("Web Development");
        setH4Text("Build dynamic, responsive, and high-performing web solutions with our expert web development services. Whether it's a corporate site, web app, or e-commerce platform, we create SEO-friendly, scalable, and secure web solutions tailored to your business needs. Our top web development services are:")
        setList(prev => [...prev, "Web Application Development", "Web portal Development", "Progressive Web Applications Development", "Enterprise Web Development", "Website Development"]);  
    }
    function mobile(){
        setList("");
        setText("Mobile App Development");
        setH4Text("Elevate your ideas into impactful, user-friendly mobile applications with our mobile app development services. We specialize in iOS, Android, and cross-platform apps, delivering secure, scalable, and high-performance solutions that boost user engagement and promote business growth. Our top mobile app development services are:");
        setList(prev => [...prev, "Android App Development", "IOS App Development","Cross-Platform App Development", "Enterprise App Development", "On-Demand App Development"]);         
    }
     function CustomSoftware (){
        setList("");
        setText("Custom Software Development");
        setH4Text("Enhance your business with our custom software solutions designed to meet your unique needs. From ERP and CRM systems to automation tools, our custom software solutions improve efficiency, streamline operations, and foster innovation. Our top custom software development services are:");
        setList(prev => [...prev, "Web Development","Mobile App Development","Product Development","E-Commerce Development","Dedicated Development Team"]);         
    }
     function Enterprise(){
        setList("");
        setText("Enterprise Software Development");
        setH4Text("Optimize your business operations with our enterprise-grade software solutions designed for scalability and security. Our enterprise software development services help businesses integrate, automate, and streamline processes, ensuring efficiency and long-term growth. Our top enterprise software development services are:");
        setList(prev => [...prev, "Custom Enterprise Software Development",
"Enterprise Mobile Application Development",
"Enterprise Web Development",
"Legacy Application Modernization",
"Software Integration Services"]);         
    }
     function blockchain(){
        setList("");
        setText("Blockchain Solutions");
        setH4Text("Leverage the power of blockchain technology for enhanced security, transparency, and efficiency. At Webkorps, we develop custom blockchain solutions, including smart contracts, decentralized applications (DApps), and NFT marketplaces, ensuring next-gen business innovation. Our top Blockchain development services are:");
        setList(prev => [...prev, "Custom Blockchain Application Development",
"Blockchain Protocol Development",
"Enterprise Blockchain Solutions",
"DAO Implementation and Development",
"NFT Marketplace Development"]);         
    }
     function iot(){
        setList("");
        setText("IoT Development");
        setH4Text("Connect devices, data, and systems with our IoT development services. We develop smart, data-driven IoT solutions for industries such as healthcare, manufacturing, and smart homes, enabling real-time monitoring and automation. Our top IoT development services are:");
        setList(prev => [...prev, "IoT Software Development",
"IoT Mobile Application Development",
"IoT Web Application Development",
"IoT Wearable App Development Services",
"Industrial IoT Services and Solutions"]);         
    }
     function Ai(){
        setList("");
        setText("AI-ML Solutions");
        setH4Text("Unlock new opportunities with our AI and machine learning solutions that promote automation, facilitate data-driven decision-making, and enhance predictive analytics. From chatbots to deep learning models, we incorporate AI to improve efficiency and business intelligence. Our top AI-ML development services are:");
        setList(prev => [...prev, "Machine Learning Model Development",
"Natural Language Processing Solutions",
"AI Product Development & Integration",
"AI-Powered Chatbots & Virtual Assistants","AI-ML Powered Cybersecurity Solutions"]);         
    }
     function it(){
        setList("");
        setText("IT Staff Augmentation");
        setH4Text("Enhance your team with top-notch IT talent through our IT staff augmentation services. Whether you require developers, designers, or technology experts, we provide skilled IT professionals who will seamlessly integrate with your in-house team. Our top IT Staff Augmentation services are:");
        setList(prev => [...prev, "On-Demand Staff Augmentation",
"Dedicated Development Team",
"Short-Term & Long-Term IT Staffing",
"Remote & On-Site IT Staffing Solutions",
"Full-Time & Part-Time IT Professionals"]);         
    }
     function ecommerce(){
        setList("");
        setText("E-Commerce Development");
        setH4Text("Launch and scale your online store using our e-commerce development services. We create secure, scalable, and feature-rich e-commerce platforms that integrate seamless payment gateways, product catalogs, and personalized shopping experiences. Our top E-Commerce development services are:");
        setList(prev => [...prev, "E-Commerce Mobile App Development",
"E-Commerce Website Design and Development",
"E-Commerce Integration",
"E-Commerce Migration and Upgrades",
"Platform-Based Development"]);         
    }
     function managed(){
        setList("");
        setText("Managed IT Services");
        setH4Text("Ensure 24/7 IT support, security, and maintenance with our managed IT services. From cloud solutions to cybersecurity management, we provide end-to-end IT support, keeping your systems optimized, secure, and running smoothly. Our top managed IT services are:");
        setList(prev => [...prev, "Cloud Management",
"IT Compliance Management",
"Data Backup & Disaster Recovery",
"Server Management",
"Cybersecurity Services"]);         
    }
    
    
    return(
        <div className="outer">
        <div className="sectionOne">
           <h1>We Code Solutions, Not Just Software</h1>
           <h4>Step Into The Digital Age We Our Cutting-Edge IT Solutions!</h4>
           <p>Tranform your business into innovative, scalable, and future-ready IT solutions. As a prominent IT solutions provider, we delivered customized business IT solutions to enhance growth, efficiency, and success in the digital era.</p>
           <h2>Our Official Patners</h2>
          <div className="companies">
             <img src={adobe} alt="Adobe logo" />
           <img src={manage} alt="manage engine logo"/>
           <img src={microsoft} alt="microsoft logo" />
           <img src={hubspot} alt="hubspot logo" />
          </div>
           <button><i class="fa-solid fa-phone"></i>  Schedule a Call Now</button>
        </div>
        <div className="boxTwo">
            <h2>Our OEM Partners</h2>
            <div className="images">
               <div className="image-track">
                 <img src={aws} alt="aws img" />
                <img src={cisco} alt="cisco img" />
                <img src={f5} alt="f5 img" />
                <img src={cloudsek} alt="cloudsek img" />
                <img src={juniper} alt="juniper img" />
                <img src={adobe} alt="adobe img" />
                <img src={manage} alt="manage img" />
                <img src={microsoft} alt="microsoft img" />
                <img src={hubspot} alt="hubspot img" />
                <img src={salesforce} alt="salesforce img" />
                <img src={sophos} alt="sophos img" />
                <img src={sysdig} alt="sysdig img" />
                <img src={trellix} alt="trellix img" />
               </div>
            </div>
             
        </div>

        <div className="boxThree">
            <div className="box3Image">
                <div className="founder1">
                    <img src={founder1} alt="founder1 img" className='founder'/>
                </div>
                <div className="founder2">
                    <img src={founder2} alt="founder2 img" className='founder'/>
                </div>
                <div className="founder3">
                    <img src={founder3} alt="founder3 img" className='founder'/>
                </div>
                <div className="founder4">
                    <img src={founder4} alt="founder4 img" className='founder'/>
                </div>
                <div className="allinone">
                    <img src={allinone} alt="all img" className='founder'/>
                </div>

            </div>
            <div className="description">
                 <div className="head">
                    <h2 id='name'>Webkorps</h2>
                    <h2>: A Trusted IT Solutions Provider Empowering Businesses Worldwide</h2>
                 </div>
                 <p>At Webkrops, we create innovative IT solutions for businesses to help them thrive in the digital age. As a trusted IT solutions provider, we specialize in customized technology for businesses of all size, from startups to enterprises. Our aim to empower businesses with technology that enhances efficiency, drives growth, and makes a lasting impact.</p>
                 <p><i class="fa-solid fa-circle-chevron-right"></i> We are an ISO 9001:2015 & ISO 27001 Certified IT Solutions Provider ensuring top-quality standards and security.</p>
                 <p><i class="fa-solid fa-circle-chevron-right"></i> 8+ years of industry expertise delivering cuttin-edge business IT solutions for diverse industries.</p>
                 <p><i class="fa-solid fa-circle-chevron-right"></i> Strong team of 250+ skilled developers driving digital transformation.</p>
                 <p><i class="fa-solid fa-circle-chevron-right"></i> Successfully delivered 500+ progect across diverse industries.</p>
                 <p><i class="fa-solid fa-circle-chevron-right"></i> We serve clients in 30+ countries, empowering business globally.</p>
                 <p><i class="fa-solid fa-circle-chevron-right"></i> Recognized and ranked on leading platforms like Clutch, GoodFirms, Techbehemoths, TopDevelopers, and many more.</p>
                 <p><i class="fa-solid fa-circle-chevron-right"></i> Trusted by startups, SMBs, and enterpise businesses for scalable IT solutions.</p>
                 <p><i class="fa-solid fa-circle-chevron-right"></i> Commitment to innovation, reliability, and  client success.</p>
            </div>
        </div>

        <div className="boxFour">
            <div className="desc4">
                <h3>Empower Your Business with Our Reliable and Cutting-Edge IT Services and Solutions</h3>
                <p>Supercharge your business with our innovative IT services designed for success. We specialize in custom software development, mobile and web app solutions, blockchain development, and AI/ML technologies. As a trusted IT solutions provider, we deliver scalable, secure, and future-ready solutions that drive growth, efficiency, and digital transformation for businesses around the world.</p> 
            </div>
           <div className="fourBottom">
             <div className="techno">
                 <div className="technology">
                    <button onClick={mobile}><i class="fa-solid fa-mobile"></i>Mobile App Development</button>
                </div>
                <div className="technology">
                    <button onClick={web}><i class="fa-solid fa-globe"></i>Web Development</button>
                </div>
                 <div className="technology">
                    <button onClick={CustomSoftware}><i class="fa-solid fa-laptop"></i>Custom Software Development</button>
                 </div>
                 <div className="technology">
                    <button onClick={Enterprise}><i class="fa-solid fa-building"></i>Enterprise Software Development</button>
                 </div>
                 <div className="technology">
                    <button onClick={blockchain}><i class="fa-solid fa-link"></i>Blockchain Solutions</button>
                 </div>
                 <div className="technology">
                    <button onClick={Ai}><i class="fa-solid fa-brain"></i>AI-ML Solution</button>
                 </div>
                 <div className="technology">
                    <button onClick={iot}><i class="fa-solid fa-microchip"></i>IoT Development</button>
                 </div>
                 <div className="technology">
                    <button onClick={it}><i class="fa-solid fa-people-group"></i>IT Staff Augmentation</button>
                 </div>
                 <div className="technology">
                    <button onClick={ecommerce}><i class="fa-solid fa-cart-shopping"></i>E-Commerce Development</button>
                 </div>
                 <div className="technology">
                    <button onClick={managed}><i class="fa-solid fa-screwdriver-wrench"></i>Managed IT Services</button>
               </div>
            </div>
            <div className="list">
             <h4>{text}</h4>
            <p>{h4text}</p>
            <ul>
               {list.map((item, index) => (
                <li key = {index}>{item}</li>
               ))}
            </ul>
            </div>
           </div>
        </div>

        <div className="outerFive">
            <div className="boxFive">
            <h2>Transform Your Vision into Reality with Our Expert IT Services!</h2>
            <p>From software development to AI-driven solutions, we deliver innovative, scalable, and secure services tailored to your business needs. Partner with us to accelerate growth and stay ahead in the digital era.</p>
             <br />
            <button>Get Started Today!</button>
        </div>
        </div>
         
         <Half/>
        
        </div>
    )
}

export default Home;
import tez from "./assets/tezjs.jpg";
import css from "./assets/css.jpg";
import html from "./assets/html.jpg";
import boot from "./assets/bootstrap.jpg";
import ty from "./assets/typescript.jpg";
import "./half.css"
import { useState } from "react";
import achivement from "./assets/achivement.jpg";
import appfutura from "./assets/appfutura.jpg";
import behemoths from "./assets/behemoths.jpg";
import clutch from "./assets/clutch.jpg";
import cmmi from "./assets/cmmi.jpg";
import company from "./assets/company.jpg";
import developer from "./assets/developer.jpg";
import development from "./assets/development-company.jpg";
import firms from "./assets/firms-top.jpg";
import goodfirms from "./assets/goodfirms.jpg";
import iso from "./assets/iso.jpg";
import rated from "./assets/rated-firm.jpg";
import service from "./assets/service-provider.jpg";
import techImply from "./assets/tech-imply.jpg";
import wadline from "./assets/wadline.jpg";
import abp from "./assets/abp-logo.jpg";
import acima from "./assets/acima-logo.jpg";
import cardinalhire from "./assets/cardinalhire.jpg";
import cigna from "./assets/cigna-logo.jpg";
import cryoport from "./assets/cryoport-logo.jpg";
import digikagaz from "./assets/digikagaz-logo.jpg";
import property from "./assets/property-finder-logo.jpg";
import puravankara from "./assets/puravankara-logo.jpg";
import sonic from "./assets/sonic-healthcare-logo.jpg";
import wendy from "./assets/wendy-logo.jpg";
import bhai from "./assets/bhai-bandhu-logo.jpg";
import inkind from "./assets/inkind-logo.jpg";
import owen from "./assets/owenscorning-logo.jpg";
import paypal from "./assets/paypal-logo.jpg";
import pebble from "./assets/pebble-logo.jpg";
import scoutr from "./assets/scoutr-logo.jpg";
import shree from "./assets/shree-laxmi-steels-logo.jpg";
import styla from "./assets/styla-logo.jpg";
import fragrances from "./assets/the-fragrances-shop-logo.jpg";
import tonik from "./assets/tonik-bank-logo.jpg";
import verizon from "./assets/verizon-logo.jpg";






function Tech(){

    const images = [css, html, boot, ty,tez];
    const [index, setIndex] = useState(0);
    const nextSlide = ()=>{
        setIndex((prev) => (prev+1)% images.length);
    };

    const prevSlide = ()=>{
        setIndex((prev) => (prev - 1 +images.length)% images.length);
    };

    return(
        
            <div className="boxSevenOuter">
                <div className="boxSeven">
                    <div className="text">
                        <h2>Our Expertise in Emerging Technologies for Scalable and Secure IT Solutions</h2>
                        <div className="space"></div>
                       <div className="line">
                       </div>
                        <p>At Webkorps, we specialize in emerging technologies to deliver scalable, secure, and future-ready IT solutions. With expertise in AI-ML, Blockchain, IoT, Data Analytics, RPA, Cybersecurity, Salesforce, and SAP, we craft innovative, high-performance IT solutions that drive business growth, enhance security, and optimize operations across industries.</p>
                    </div>
                   
                        
                    
                </div>
            </div>
    )
}


function NextGen(){
     const[activeCard, setActiveCard] = useState(null);
     const handleHover = (cardName) =>{
        setActiveCard(cardName)
     };
    
    return(
        <div className="nextGen">
            <div className="text">
                        <h2>Empowering Industries with Secure, Scalable, and Smart IT Solutions</h2>
                        <div className="space"></div>
                       <div className="line">
                       </div>
                        <p>At Webkorps, we deliver industry-specific IT solutions designed to drive innovation, efficiency, and business growth. From healthcare, finance, and e-commerce to logistics, manufacturing, and retail, our secure, scalable, and high-performance solutions empower businesses to stay ahead in the digital era.</p>
                    </div>

            <div className="Genimg">
                <div className="Genimg_tracker">
                    <div className="assetManage" id="Genimg" onMouseEnter={()=>handleHover("asset")} onMouseLeave={()=>handleHover(null)} >
                    <div className="textes"style={{ marginTop: activeCard === "asset"? "60px":"220px", transition: "margin-top 0.6s ease",}}>
                        <h2>Asset Managment</h2>
                        { activeCard === "asset" && <p>Optimize portfolio tracking and automate financial reporting with our IT solutions & services. Enhance security, ensure seamless transactions, and enable real-time data insights for smarter asset management.</p>}
                    </div>
                </div>
                <div className="logistics" id="Genimg" onMouseEnter={()=>handleHover("logistics")} onMouseLeave={()=>handleHover(null)}>
                    <div className="textes" style={{ marginTop: activeCard === "logistics"? "90px":"220px", transition: "margin-top 0.6s ease",}}>
                        <h2>Logistics</h2>
                   { activeCard === "logistics" && <p>Improve supply chain operations with our IT solutions, featuring AI-driven route optimization, real-time tracking, and automated logistics management to boost efficiency and reduce operational costs.</p>}
                       </div>
                </div>
                <div className="healthcare" id="Genimg" onMouseEnter={()=>handleHover("healthcare")} onMouseLeave={()=>handleHover(null)}>
                    <div className="textes" style={{ marginTop: activeCard === "healthcare"? "90px":"220px", transition: "margin-top 0.6s ease",}}>
                        <h2>Healthcare</h2>
                        {activeCard === "healthcare" &&<p>Revolutionize patient care with our IT solutions - secure telemedicine platforms, AI-powered diagnostics, and seamless EHR integration to enhance healthcare efficiency and data privacy.</p>}
                    </div>
                </div>
                <div className="fintech" id="Genimg" onMouseEnter={()=>handleHover("fintech")} onMouseLeave={()=>handleHover(null)}>
                    <div className="textes" style={{ marginTop: activeCard === "fintech"? "90px":"220px", transition: "margin-top 0.6s ease",}}>
                        <h2>Fintech</h2>
                    {activeCard === "fintech" &&<p>Secure transactions, prevent fraud, and streamline financial operations with our fintech IT solutions, integrating blockchain, AI, and automation for greater trust and efficiency.</p>}
                    </div>
                </div>
                <div className="realEstate" id="Genimg" onMouseEnter={()=>handleHover("realEstate")} onMouseLeave={()=>handleHover(null)}>
                    <div className="textes" style={{ marginTop: activeCard === "realEstate"? "90px":"220px", transition: "margin-top 0.6s ease",}}>
                        <h2>Real Estate</h2>
                    {activeCard === "realEstate" &&<p>Transform property transactions with IT solutions like AI-powered property valuation, smart contracts, and virtual property tours, ensuring efficiency, transparency, and security.</p>}
                    </div>
                </div>
                <div className="retail" id="Genimg" onMouseEnter={()=>handleHover("retail")} onMouseLeave={()=>handleHover(null)}>
                    <div className="textes" style={{ marginTop: activeCard === "retail"? "90px":"220px", transition: "margin-top 0.6s ease",}}>
                        <h2>Retail</h2>
                   {activeCard === "retail" && <p>Enhance customer engagement and sales with IT solutions that offer AI-driven personalization, omnichannel integration, and secure digital payment systems for a seamless shopping experience.</p>}
                    </div>
                </div>
                <div className="fitness" id="Genimg" onMouseEnter={()=>handleHover("fitness")} onMouseLeave={()=>handleHover(null)}>
                    <div className="textes" style={{ marginTop: activeCard === "fitness"? "100px":"220px", transition: "margin-top 0.6s ease",}}>
                        <h2>Fitness & Wellness</h2>
                    {activeCard === "fitness" &&<p>Empower users with IT solutions integrating AI, IoT, and blockchain for secure health data storage, personalized fitness tracking, and smart wearables connectivity.</p>}
                    </div>
                </div>
                <div className="travel" id="Genimg" onMouseEnter={()=>handleHover("travel")} onMouseLeave={()=>handleHover(null)}>
                    <div className="textes" style={{ marginTop: activeCard === "travel"? "90px":"220px", transition: "margin-top 0.6s ease",}}>
                        <h2>Travel</h2>
                    {activeCard === "travel" &&<p>Optimize travel experiences with our IT solutions, featuring AI-driven itinerary planning, blockchain-based identity verification, and automated booking systems for secure, seamless journeys.</p>}
                    </div>
                </div>
                <div className="agriculture" id="Genimg" onMouseEnter={()=>handleHover("agriculture")} onMouseLeave={()=>handleHover(null)}>
                    <div className="textes" style={{ marginTop: activeCard === "agriculture"? "90px":"220px", transition: "margin-top 0.6s ease",}}>
                        <h2>Agriculture</h2>
                    {activeCard === "agriculture" &&<p>Increase farming efficiency with IT solutions such as IoT-based precision agriculture, AI-driven crop analytics, and blockchain-powered food traceability for a sustainable supply chain.</p>}
                    </div>
                </div>
                <div className="warehouseManage" id="Genimg" onMouseEnter={()=>handleHover("warehouseManage")} onMouseLeave={()=>handleHover(null)}>
                    <div className="textes" style={{ marginTop: activeCard === "warehouseManage"? "60px":"220px", transition: "margin-top 0.6s ease",}}>
                        <h2>Warehouse Management</h2>
                    {activeCard === "warehouseManage" &&<p>Streamline inventory operations with our IT solutions, offering real-time tracking, AI-powered demand forecasting, and automated workflows to enhance warehouse efficiency.</p>}
                    </div>
                </div>
                <div className="entertain" id="Genimg" onMouseEnter={()=>handleHover("entertain")} onMouseLeave={()=>handleHover(null)}>
                    <div className="textes" style={{ marginTop: activeCard === "entertain"? "90px":"220px", transition: "margin-top 0.6s ease",}}>
                        <h2>Entertainment</h2>
                    {activeCard === "entertain" &&<p>Innovate in the entertainment industry with IT solutions like blockchain-secured digital rights management, AI-powered content recommendations, and immersive AR/VR experiences.</p>}
                    </div>
                </div>
                <div className="gaming" id="Genimg" onMouseEnter={()=>handleHover("gaming")} onMouseLeave={()=>handleHover(null)}>
                    <div className="textes" style={{ marginTop: activeCard === "gaming"? "90px":"220px", transition: "margin-top 0.6s ease",}}>
                        <h2>Gaming</h2>
                    {activeCard === "gaming" &&<p>Revolutionize gaming with IT solutions that power blockchain-based NFTs, AI-driven game mechanics, and secure digital asset transactions for immersive and monetized gameplay.</p>}
                    </div>
                </div>
                </div>
            </div>       
        </div>
    )
}

function Powering(){
    return(
        <div className="power">
            <h2>Transforming Ideas into Reality</h2>
            <h2>Our Portfolio of Successful IT Projects</h2>
            <p>Discover our portfolio of successful IT solutions, where innovation meets impact. We offer a range of services, including custom software development, enterprise applications, AI-driven solutions, and blockchain integrations. Our case studies demonstrate how we empower businesses with scalable, secure, and high-performance technology tailored to meet their unique needs.</p>

        </div>
    )
}


function Testment(){
    return(
        <div className="testment">

            <div className="innerTest">
                <div className="head">
                    <h2>Awards & Accolades:</h2>
                    <h2 id="testment">A Testament to Our IT Expertise</h2>
                </div>
                <div className="tests">
                  <div className="tests-tracker">
                    <img src={achivement} alt="acheviment" />
                    <img src={appfutura} alt="appfutura" /> 
                    <img src={behemoths} alt="behemoths" /> 
                    <img src={clutch} alt="clutch" /> 
                    <img src={cmmi} alt="cmmi" /> 
                    <img src={company} alt="company" /> 
                    <img src={developer} alt="developer" /> 
                    <img src={development} alt="development" /> 
                     <img src={firms} alt="firms" /> 
                     <img src={goodfirms} alt="goodfirms" /> 
                     <img src={iso} alt="iso" /> 
                     <img src={rated} alt="rated" /> 
                     <img src={service} alt="service" /> 
                     <img src={techImply} alt="techImply" /> 
                     <img src={wadline} alt="wadline" /> 
                    </div>
                </div>
            </div>
         </div>
    )
}


function Brands(){
    return(
        <div className="brands">
            <div className="brandOne">
                <h2>Leading Brands That Trust Our</h2>
                <h2>IT Solutions & Services</h2>
            </div>
            <div className="brandTwo">
                <p>We take pride in collaborating with leading global brands and industry experts to deliver innovative IT solutions that promote success. Our commitment to excellence and customer satisfaction has earned us the trust of businesses across various sectors, enabling them to achieve digital transformation and sustainable growth.</p>
            </div>
            <div className="brandThree">
                <div className="brand3-tracker">
                    <img src={abp} alt="Abp news" />
                    <img src={acima} alt="acima news" />
                    <img src={cardinalhire} alt="Cardinalhire" />
                    <img src={cigna} alt="cigna" />
                    <img src={cryoport} alt="cryoport" />
                    <img src={digikagaz} alt="digikagaz" />
                    <img src={property} alt="property" />
                    <img src={puravankara} alt="puravankara" />
                    <img src={sonic} alt="sonic" />
                    <img src={wendy} alt="wendy" />
                </div>
            </div>
            <div className="brandFour">
                <div className="brand4-tracker">
                  <img src={bhai} alt="Bhai-banbdu" />
                  <img src={inkind} alt="inkind" />
                  <img src={owen} alt="owenscorning" />
                  <img src={paypal} alt="paypal" />
                  <img src={pebble} alt="pebble" />
                  <img src={scoutr} alt="scoutr" />
                  <img src={styla} alt="styla" />
                  <img src={fragrances} alt="fragrances" />
                  <img src={tonik} alt="tonik" />
                  <img src={verizon} alt="verizon" />
                </div>
            </div>
        </div>
    )
}

function Success(){
    return(
        <div className="success">
           <h2>Partner with Us for Your Success!</h2>
           <p>Join the growing list of satisfied clients who trust our expertise and innovative IT solutions. Let’s collaborate to turn your vision into reality with technology-driven excellence.</p>
           <button>Get in Touch Today!</button>
        </div>
    )
}



function Excellence(){


    return(
        <div className="excellence">
            <h1>Webkorps:</h1>
            <h2>Powering Businesses with Proven Excellence</h2>
             <div className="excellenceLower">
                 <div className="excellence1">
                       <p>With over 8 years of industry expertise, Webkorps has been at the forefront of delivering innovative and high-quality software solutions. Backed by a team of 250+ skilled professional developers, we have successfully executed 500+ projects across diverse industries, helping businesses achieve digital transformation and operational excellence.</p>
                       <p>Our global presence spans 30+ countries, enabling us to cater to a wide range of clients with customized solutions that drive efficiency and growth. With a 98% client satisfaction rate, we remain committed to delivering exceptional results, fostering long-term partnerships, and pushing the boundaries of technology innovation.</p>
                       <button>Get a Free Consultation Now!</button>
                </div>
            <div className="excellence2">
                    <div className="div1">
                        <h2>8+</h2>
                        <p>Years in Business</p>
                        <hr />
                        <h2>250+</h2>
                        <p>Professional Development Team</p>
                    </div>
                    <div className="div2">
                        <div className="y"></div>
                        <br />
                        <br />
                        <div className="y"></div>
                    </div>
                    <div className="div3">
                        <h2>500+</h2>
                        <p>Projrcts Delivered</p>
                         <hr />
                        <h2>30+</h2>
                        <p>Countries Served</p>
                    </div>
             </div>
            </div>
        </div>
    )
}

function Advance(){
    return(
        <div className="advance">
            <h2>Leverage the Power of Advanced Technologies for Your Business Success!</h2>
            <p>Harness our expertise in cutting-edge technologies to build secure, scalable, and high-performance IT solutions. Stay ahead of the competition with innovative digital transformation.</p>
            <button>Let's Innovate Together!</button>
        </div>
    )
}

export { Tech, NextGen, Powering, Testment, Brands, Success, Excellence, Advance};

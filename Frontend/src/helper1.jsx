import tez from "./assets/tezjs.jpg";
import css from "./assets/css.jpg";
import html from "./assets/html.jpg";
import boot from "./assets/bootstrap.jpg";
import ty from "./assets/typescript.jpg";
import "./half.css"
import { useState } from "react";
import assetmanage from "./assets/asset-management.jpg";
import entertainment from "./assets/entertainment.jpg";
import fintech from "./assets/fintech.jpg";
import fitness from "./assets/fitness.jpg";
import gaming from "./assets/gaming.jpg";
import healthcare from "./assets/healthcare.jpg";
import logistics from "./assets/logistics.jpg";
import realEstate from "./assets/real-estate.jpg";
import retail from "./assets/retail.jpg";
import travel from "./assets/travel.jpg";
import warehouseManage from "./assets/warehouse-management.jpg";



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
                <div className="assetManage" id="Genimg">
                    <h2>Asset Managment</h2>
                    <p>Optimize portfolio tracking and automate financial reporting with our IT solutions & services. Enhance security, ensure seamless transactions, and enable real-time data insights for smarter asset management.</p>
                </div>
                <div className="logistics" id="Genimg">
                    <h2>Logistics</h2>
                    <p>Improve supply chain operations with our IT solutions, featuring AI-driven route optimization, real-time tracking, and automated logistics management to boost efficiency and reduce operational costs.</p>
                </div>
                <div className="healthcare" id="Genimg">
                    <h2>Healthcare</h2>
                    <p>Revolutionize patient care with our IT solutions - secure telemedicine platforms, AI-powered diagnostics, and seamless EHR integration to enhance healthcare efficiency and data privacy.</p>
                </div>
                <div className="fintech" id="Genimg">
                    <h2>Fintech</h2>
                    <p>Secure transactions, prevent fraud, and streamline financial operations with our fintech IT solutions, integrating blockchain, AI, and automation for greater trust and efficiency.</p>
                </div>
                <div className="realEstate" id="Genimg">
                    <h2>Real Estate</h2>
                    <p>Transform property transactions with IT solutions like AI-powered property valuation, smart contracts, and virtual property tours, ensuring efficiency, transparency, and security.</p>
                </div>
                <div className="retail" id="Genimg">
                    <h2>Retail</h2>
                    <p>Enhance customer engagement and sales with IT solutions that offer AI-driven personalization, omnichannel integration, and secure digital payment systems for a seamless shopping experience.</p>
                </div>
                <div className="fitness" id="Genimg">
                    <h2>Fitness & Wellness</h2>
                    <p>Empower users with IT solutions integrating AI, IoT, and blockchain for secure health data storage, personalized fitness tracking, and smart wearables connectivity.</p>
                </div>
                <div className="travel" id="Genimg">
                    <h2>Travel</h2>
                    <p>Optimize travel experiences with our IT solutions, featuring AI-driven itinerary planning, blockchain-based identity verification, and automated booking systems for secure, seamless journeys.</p>
                </div>
                <div className="agriculture" id="Genimg">
                    <h2>Agriculture</h2>
                    <p>Increase farming efficiency with IT solutions such as IoT-based precision agriculture, AI-driven crop analytics, and blockchain-powered food traceability for a sustainable supply chain.</p>
                </div>
                <div className="warehouseManage" id="Genimg">
                    <h2>Warehouse Management</h2>
                    <p>Streamline inventory operations with our IT solutions, offering real-time tracking, AI-powered demand forecasting, and automated workflows to enhance warehouse efficiency.</p>
                </div>
                <div className="entertain" id="Genimg">
                    <h2>Entertainment</h2>
                    <p>Innovate in the entertainment industry with IT solutions like blockchain-secured digital rights management, AI-powered content recommendations, and immersive AR/VR experiences.</p>
                </div>
                <div className="gaming" id="Genimg">
                    <h2>Gaming</h2>
                    <p>Revolutionize gaming with IT solutions that power blockchain-based NFTs, AI-driven game mechanics, and secure digital asset transactions for immersive and monetized gameplay.</p>
                </div>
                </div>       
        </div>
    )
}

function Powering(){
    return(
        <h1></h1>
    )
}

export { Tech, NextGen };

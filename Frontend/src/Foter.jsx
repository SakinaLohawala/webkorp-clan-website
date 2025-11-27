import logo from "./assets/webkropLogo.jpg";
import { Link } from "react-router-dom";
import "./Foter.css";

export default function Foter(){
    return(
        <div className="footer">
            <div className="upperFoot">
                <div className="logoBox">
                <div className="logoimg">
                  <img src={logo} alt="logo" width={200} />
                <h1>Webkorps</h1>
                </div>
                <p>Our dedicated team delivers unified insights and intelligent solutions for your business. Your trust is our commitment.</p>
             </div>

             <div className="conpany">
                <h4>Company</h4>
                <Link to="/about"><p>About US</p></Link>
                <Link to="/career"><p>Careers</p></Link>
             </div>
             <div className="event">
                <h4>Events</h4>
                <Link to="/ces"><p>CES</p></Link>
                <Link to="/indiasoft"><p>IndiaSoft</p></Link>
                <Link to="/inbound"><p>Inbound</p></Link>
                <Link to="/Gitex"><p>Gitex Dubai</p></Link>
                <Link to="/mwc"><p>MWC</p></Link>
             </div>
             <div className="service">
                <h4>Services</h4>
                <Link to="/mobile"><p>Mobile Development</p></Link>
                <Link to="/web"><p>Web Development</p></Link>
                <Link to="/cloud"><p>Cloud Development</p></Link>
                <Link to="/commerce"><p>E-Commerce Development</p></Link>
                <Link to="/ai&ml"><p>AI&ML Development</p></Link>
             </div>
             <div className="tehnology">
                <h4>Technology</h4>
                <Link to="/ror"><p>RoR</p></Link>
                <Link to="/java"><p>Java</p></Link>
                <Link to="/android"><p>Andorid</p></Link>
                <Link to="/python"><p>Python</p></Link>
                <Link to="/ios"><p>IOS</p></Link>
             </div>
             <div className="industry">
                <h4>Industry</h4>
                <Link to="/logistic"><p>Logistic Industry</p></Link>
                <Link to="/healthcare"><p>HealthCare</p></Link>
                <Link to="/asset"><p>Asset Managment</p></Link>
                <Link to="/fin"><p>Fin Tech</p></Link>
                <Link to="/real"><p>Real Estate</p></Link>
             </div>
            </div>
            <hr></hr>
            <div className="lowerFoot">
               <div className="part1">
                  <h2>Webkorps</h2>
               <h3>Across the Globe</h3>
               </div>
               <div className="part2">
                  <h3>Indore, India (HQ)</h3>
                  <p>4th Floor, Winway World Offices, Vijay Nagar, Indore, Madhya Pradesh 452010</p>
                  <div className="footline"></div>
               </div>
               <div className="part3">
                  <h3>Pune, India</h3>
                  <p>Trios Co-working, 3rd floor, Lalwani Icon, off New Airport Road, Sakore Nagar, Viman Nagar, Pune, Maharashtra 411014</p>
                  <div className="footline"></div>
               </div>
               <div className="part4">
                  <h3>Bengaluru, India</h3>
                  <p>7th Floor, Commerce Mantri, 12, 1 & 2, Bannerghatta Road, BTM 2nd Stage, BTM Layout, Bengaluru, Karnataka 560076</p>
                  <div className="footline"></div>
               </div>
               <div className="part5">
                  <h3>Frisco, TX</h3>
                  <p>6160 Warren Parkway, Suite 100 Frisco, Texas 75034</p>
                  <div className="footline"></div>
               </div>
               <div className="part6">
                  <h3>Sheridan, WY</h3>
                  <p>1309 Coffeen Ave,STE B1, Sheridan, WY 82801</p>
               </div>
            </div>
        </div>
    )
}
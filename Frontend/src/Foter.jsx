import logo from "./assets/webkropLogo.jpg";
import { Link } from "react-router-dom";

export default function Foter(){
    return(
        <div className="footer">
             <div className="logobox">
                <img src={logo} alt="logo" width={200} />
                <h1>Webkorps</h1>
                <p>Our dedicated team delivers unified insights and intelligent solutions for your business. Your trust is our commitment.</p>
             </div>

             <div className="conpany">
                <p>Company</p>
                <Link to="/about"><li>About US</li></Link>
                <Link to="/career"><li>Careers</li></Link>
             </div>
             <div className="event">
                <p>Events</p>
                <Link to="/ces"><li>CES</li></Link>
                <Link to="/indiasoft"><li>IndiaSoft</li></Link>
                <Link to="/inbound"><li>Inbound</li></Link>
                <Link to="/Gitex"><li>Gitex Dubai</li></Link>
                <Link to="/mwc"><li>MWC</li></Link>
             </div>
             <div className="service">
                <p>Services</p>
                <Link to="/ces"><li>Mobile Development</li></Link>
                <Link to="/indiasoft"><li>Web Development</li></Link>
                <Link to="/inbound"><li>Cloud Development</li></Link>
                <Link to="/Gitex"><li>E-Commerce Development</li></Link>
                <Link to="/mwc"><li>AI&ML Development</li></Link>
             </div>
             <div className="technology">
                <p>Technology</p>
                <Link to="/ces"><li>RoR</li></Link>
                <Link to="/indiasoft"><li>Java</li></Link>
                <Link to="/inbound"><li>Andorid</li></Link>
                <Link to="/Gitex"><li>Python</li></Link>
                <Link to="/mwc"><li>IOS</li></Link>
             </div>
             <div className="industry">
                <p>Industry</p>
                <Link to="/ces"><li>Logistic Industry</li></Link>
                <Link to="/indiasoft"><li>HealthCare</li></Link>
                <Link to="/inbound"><li>Asset Managment</li></Link>
                <Link to="/Gitex"><li>Fin Tech</li></Link>
                <Link to="/mwc"><li>Real Estate</li></Link>
             </div>
        </div>
    )
}
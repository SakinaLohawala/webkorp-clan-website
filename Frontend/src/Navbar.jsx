import './Navbar.css';
import logo from "./assets/webkropLogo.jpg";
import { Link } from "react-router-dom";
import { useState } from 'react';

function Navbar(){

    const[open, setOpen] = useState(false);
    const[open1, setOpen1] = useState(false);
    const[open2, setOpen2] = useState(false);
    const[open3, setOpen3] = useState(false);
    
    return(
       <div className="out">
        <div className="navbar">
           
            <Link to="/">
            <div className="logobox">
             <img src={logo} alt="logo" width={200} />
             <h1>Webkorps</h1>
             </div>
             </Link>
        
       <div className="option">
       <Link to="/about"><button>About</button></Link>
       <button onClick={()=> setOpen(!open)}>Services</button>
       <button onClick={()=> setOpen1(!open1)}>Technology</button>
       <button onClick={()=> setOpen2(!open2)}>Industries</button>
       <button onClick={()=> setOpen3(!open3)}>Insights</button>
       <Link to="/career"><button>Careers</button></Link>



       {open && (
        <div className="dropdown">
        <div className="one">
        <Link to="/mobile"><h4>Mobile Development</h4></Link>
        <Link to="/web"><h4>Web Development</h4></Link>
        <Link to="/cloud"><h4>Cloud Development</h4></Link>
        </div>
        <div className="two">
        <Link to="/commerce"><h4>E-Commerce Development</h4></Link>
        <Link to="/ai&ml"><h4>AI&ML Development</h4></Link>
        <Link to="/iot"><h4>IoT Development</h4></Link>
        </div>
        <div className="three">
        <Link to="/blockchain"><h4>Blockchain Development</h4></Link>
        <Link to="/custom"><h4>Custom Software Development</h4></Link>
        <Link to="/managed"><h4>Managed IT Services</h4></Link>
        </div>
        <div className="four">
        <Link to="/enterprise"><h4>Enterprises Software Development</h4></Link>
        <Link to="/augmentation"><h4>IT Staff Augmentation</h4></Link>
        </div>
        
       </div>
       )}

       {open1 &&(
        <div className="dropdown">
            <div className="one">
            <Link to="/ror"><p>RoR</p></Link>
            <Link to="/java"><p>Java</p></Link>
            </div>
            <div className="two">
            <Link to="/android"><p>Andorid</p></Link>
            <Link to="/python"><p>Python</p></Link>
            </div>
            <div className="three">
            <Link to="/ios"><p>IOS</p></Link>
            <Link to="/net"><p>.Net</p></Link>
            </div>
            <div className="four">
                <Link to="/react"><p>React-Native</p></Link>
                <Link to="/php"><p>PHP</p></Link>
            </div>
            
        </div>
       )}

       {open2 &&(
        <div className="dropdown">
            <div className="one">
             <Link to="/logistic"><p>Logistic Industry</p></Link>
             <Link to="/healthcare"><p>HealthCare</p></Link>
            </div>
            <div className="two">
            <Link to="/asset"><p>Asset Managment</p></Link>
             <Link to="/fin"><p>Fin Tech</p></Link>
            </div>
             <div className="three">
              <Link to="/real"><p>Real Estate</p></Link>
              <Link to="/retail"><p>Retail</p></Link>
             </div>
             <div className="four">
                <Link to="/travel"><p>Travel and Hospitality</p></Link>
                <Link to="/warehouse"><p>Warehouse</p></Link>
             </div>
        </div>
       )}

       {open3 && (
        <div className="dropdown">
            <Link to="/case"><p>Case Study</p></Link>
            <Link to="/blog"><p>Blogs</p></Link>
        </div>
       )}
       
         <div className="talk">
            <button>Talk to Us</button>
        </div>
       </div>
       
       </div>

       
       <br /><br /><br /><br />
       </div>
    )
}

export default Navbar;
import './Navbar.css';
import logo from "./assets/webkropLogo.jpg";
import { Link } from "react-router-dom";

function Navbar(){
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
      
       <Link to="/career"><button>Careers</button></Link>


       
       
         <div className="talk">
            <button>Talk to Us</button>
        </div>
       </div>
       
       </div>

       
       <br /><br /><br /><br /><br />
       </div>
    )
}

export default Navbar;
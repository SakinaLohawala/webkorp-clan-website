import iot from "./assets/iot2.jpg";
import ai from "./assets/ai.jpg";
import data from "./assets/data.jpg";
import sales from "./assets/sales.jpg";
import sap from "./assets/sap.jpg";
import security from "./assets/security.jpg";
import robotic from "./assets/robotic.jpg";
import blockchain from "./assets/blockchain.jpg";
import "./half.css"
import { Tech, NextGen, Powering, Testment, Brands, Success, Advance} from "./helper1.jsx";

export default function Half (){
    return(
        <div className="outer2">
            <div className="boxSix">
                <h2>Our Seamless Integrations to Enhance Your Digital Ecosystem</h2>
                <p>Enhance your digital ecosystem with seamless integration services, including Blockchain, AI/ML, IoT, Data Analytics, RPA, Cybersecurity, Salesforce, and SAP. We empower businesses with secure, intelligent, and automated solutions that improve efficiency, scalability, and innovation</p>

                <div className="upperImage">
                    <div className="hexagon">
                      <img src={iot} alt="iot image" />
                    </div>
                    <div className="hexagon">
                        <img src={ai} alt="ai image" />
                    </div>
                    <div className="hexagon">
                        <img src={data} alt="data image" />
                        </div>
                    <div className="hexagon"> 
                        <img src={robotic} alt="robotic image" />
                        </div>
                </div>

                <div className="lowerImage">
                    <div className="hexagon"><img src={security} alt="security image" /></div>
                    <div className="hexagon"> <img src={sales} alt="sales image" /></div>
                    <div className="hexagon"><img src={blockchain} alt="blockchain image" /></div>
                    <div className="hexagon"><img src={sap} alt="sap image" /></div>
                </div>
            </div>

            <Tech/>
            <Advance/>
            <NextGen/>
            <Powering/>
            <Testment/>
            <Brands/>
            <Success/>
        </div>
    )
}
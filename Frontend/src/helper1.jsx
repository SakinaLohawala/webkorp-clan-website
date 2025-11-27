function tech(){
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
                    <div className="tools">
                        <div className="block">
                            <h3>Frontend Technology</h3>
                            <div className="tech">
                                <img src={tez} alt="tez image" />
                                <img src={css} alt="css image" />
                                <img src={boot} alt="boot image" />
                                <img src={html} alt="html image" />
                                <img src={ty} alt="type image" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}

function NextGen(){
    return(
        <div className="nextGen">

        </div>
    )
}

export { tech, NextGen };

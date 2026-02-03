import "./Career.css"; 
import career1 from "./assets/career-1.jpg";
import career2 from "./assets/career-2.jpg";
import career3 from "./assets/career-3.jpg";
 
 function Careers(){
    return(
        <div className="career">
            <div className="front">
                <div className="frontText">
                    <h1>Be A Part of An Innovative, Dynamic, & Growth-driven Environment At Webkorps</h1>
                    <p>At Webkorps, we don’t just build software - we build careers. Join a team of innovators, problem-solvers, and tech enthusiasts who are shaping the digital future. If you're ready to challenge yourself, grow, and make an impact, your journey starts here! Explore exciting career opportunities and grow with us!</p>
                    <button>Explore Opportunities!</button>
                </div>
            </div>
            <div className="block2">
                <div className="block2Text">
                    <h1>Innovate, Grow & Thrive with Webkorps!</h1>
                    <p>At Webkorps, we aren't just a workplace; we are a dynamic team of passionate innovators, problem-solvers, and tech enthusiasts dedicated to delivering exceptional results. Since our inception, we have forged strong partnerships with global organizations, providing cutting-edge solutions that drive significant impact.</p>
                    <p>We pride ourselves on cultivating a culture of continuous learning, collaboration, and growth. Whether you are an experienced professional or a fresh talent, we offer the right opportunities and challenges in a supportive environment where you can truly thrive.</p>
                    <p>If you are ready to work with a forward-thinking company that recognizes and values your skills, creativity, and ambition, look no further than Webkorps. Join us, and together, let's shape the future!</p>
                </div>
                <div className="block2Img">
                    <div className="upperImg">
                        <img src={career1} alt="career1" />
                        <img src={career2} alt="career2" />
                    </div>
                    <div className="lowerImg">
                        <img src={career3} alt="career3" />
                    </div>
                </div>
            </div>

            <div className="block3">
                <div className="block3Inner">
                    <div className="block3First">
                        <h2>What Drives Us at Webkorps</h2>
                        <p>At Webkorps, our values aren’t just words - they define who we are, how we work, and what we stand for. We believe in creating a workplace where innovation thrives, teamwork flourishes, and every individual is empowered to grow. Here’s what makes Webkorps an extraordinary place to build your career.</p>
                    </div>
                    <div className="block3Second">
                        <div className="box">
                            <h2>🚀</h2>
                            <h3>Innovation at the Core</h3>
                            <p>We not only adapt to change; we actively drive it. By embracing creativity and cutting-edge technology, we create solutions that make a meaningful impact. We encourage our team to think big, experiment boldly, and turn ideas into reality.</p>
                        </div>
                          <div className="box">
                            <h2>🤝</h2>
                            <h3>Stronger Together</h3>
                            <p>Success is a collaborative effort. We thrive on teamwork, valuing diverse perspectives and fostering a culture where everyone is heard and appreciated. Together, we create an environment of trust, respect, and shared growth.</p>
                        </div>
                          <div className="box">
                            <h2>📚</h2>
                            <h3>Growth Mindset</h3>
                            <p>Your development is our priority. We believe in continuous learning, mentorship, and skill enhancement. Whether through training programs, certifications, or challenging projects, we provide the resources you need to reach new heights in your career.</p>
                        </div>
                          <div className="box">
                            <h2>⚖️</h2>
                            <h3>Integrity & Accountability</h3>
                            <p>Trust is the foundation of our work. We act with honesty, uphold our commitments, and take responsibility for our actions. This dedication to integrity fosters lasting relationships with both our clients and our team members.</p>
                        </div>
                    </div>

                    <div className="block3Third">
                        <div className="box">
                            <h2>🎯</h2>
                            <h3>Customer-First Approach</h3>
                            <p>Our clients' success is our success. We go beyond merely delivering projects; we create solutions that address real problems, drive business growth, and add value. Every decision we make prioritizes providing the best experience for our clients.</p>
                        </div>
                        <div className="box">
                            <h2>⚖️</h2>
                            <h3>Balance & Well-Being</h3>
                            <p>Work should empower, not exhaust. We believe in maintaining a healthy work-life balance by offering a flexible and supportive environment. Whether through personal development, mental well-being initiatives, or team-building activities, we ensure our employees feel motivated and fulfilled.</p>
                        </div>
                        <div className="box">
                            <h2>🌍</h2>
                            <h3>Diversity & Inclusion</h3>
                            <p>We celebrate differences and believe that diverse backgrounds, perspectives, and ideas drive innovation. At Webkorps, everyone is welcomed, respected, and given equal opportunities to succeed.</p>
                        </div>
                        <div className="box">
                            <h2>🏆</h2>
                            <h3>Excellence in Execution</h3>
                            <p>We don't settle for 'good enough.' From initial ideas to final delivery, we uphold the highest standards of quality, precision, and efficiency in everything we do. Excellence is not just a goal; it's our way of working.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Careers;
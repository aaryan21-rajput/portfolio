import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              ARYAN
              <br />
              <span>RAJPUT</span>
            </h1>
          </div>
          <div className="landing-info">
            <h2>Founder & Web Developer</h2>
            <h2 className="landing-info-h2">
              
            </h2>
            <h2>
            
              
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;

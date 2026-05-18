import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const handlersRef = useRef<Map<HTMLDivElement, () => void>>(new Map());
  
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container: HTMLDivElement | null) => {
        if (container) {
          container.classList.remove("what-noTouch");
          const handler = () => handleClick(container);
          handlersRef.current.set(container, handler);
          container.addEventListener("click", handler);
        }
      });
    }
    return () => {
      containerRef.current.forEach((container: HTMLDivElement | null) => {
        if (container) {
          const handler = handlersRef.current.get(container);
          if (handler) {
            container.removeEventListener("click", handler);
            handlersRef.current.delete(container);
          }
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el: HTMLDivElement | null) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>WEB DEVELOPMENT</h3>
              <h4>Modern Interactive Web Experiences</h4>
              <p>
                Creating responsive, high-performing websites with modern frameworks.
                Specialized in React, 3D graphics, and interactive animations that
                engage users and drive conversions.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">React.js</div>
                <div className="what-tags">TypeScript</div>
                <div className="what-tags">Three.js</div>
                <div className="what-tags">GSAP Animations</div>
                <div className="what-tags">Responsive Design</div>
                <div className="what-tags">Performance Optimization</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el: HTMLDivElement | null) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>BUSINESS GROWTH</h3>
              <h4>Lead Generation & Online Presence</h4>
              <p>
                Building high-converting websites for professionals and businesses.
                Help establish strong online presence, improve SEO visibility, and
                capture leads through strategic design and user experience.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">UI/UX Design</div>
                <div className="what-tags">SEO Optimization</div>
                <div className="what-tags">Lead Capture</div>
                <div className="what-tags">WhatsApp Integration</div>
                <div className="what-tags">Netlify/Vercel</div>
                <div className="what-tags">Client Management</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}

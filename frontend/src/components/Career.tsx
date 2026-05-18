import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5>WebRajya Digital Solutions</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building modern, responsive websites for professionals like CAs, advocates, and businesses. 
              Help clients generate leads through strong online presence and Google visibility. Design 
              interactive 3D portfolio websites and implement SEO basics for better ranking and performance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Web Developer</h4>
                <h5>2025 – Present</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Developed multiple business and personal portfolio websites for clients. Customized UI/UX 
              based on client niches (legal, finance, personal branding). Deployed and managed websites 
              using Netlify and Vercel. Integrated contact forms, WhatsApp APIs, and lead capture systems.
            </p>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AIML Engineering Student</h4>
                <h5>GH Raisoni College</h5>
              </div>
              <h3>2024–Present</h3>
            </div>
            <p>
              Pursuing Bachelor of Engineering in Artificial Intelligence & Machine Learning. Gaining 
              knowledge in AI, machine learning, and software engineering principles while building 
              practical projects and commercial experience. Balancing academic learning with real-world web development work to enhance skills and career growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

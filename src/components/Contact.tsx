import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:aryanrajputofficial@gmail.com" data-cursor="disable">
                aryanrajputofficial@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+919630013483" data-cursor="disable">
                +91 96300 13483
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/aaryanrajput.21?igsh=MXQ2YmkyaDE5aDF6Nw=="
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Aryan Rajput</span>
            </h2>
            <p style={{ fontSize: "14px", margin: "10px 0", color: "#888" }}>
              Inspired by <a href="#" style={{ color: "#2563eb", textDecoration: "none" }}>Moncy Yohannan</a>
            </p>
            <h5>
              <MdCopyright /> 2024
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

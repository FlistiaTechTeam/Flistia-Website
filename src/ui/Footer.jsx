import logo from "../assets/images/logo/secondary-logo-white.png";
import facebook from "../assets/images/footer/facebook.svg";
import instagram from "../assets/images/footer/instagram.svg";
import linkedin from "../assets/images/footer/linkedin.svg";
import phone from "../assets/images/footer/phone.svg";
import email from "../assets/images/footer/gmail.svg";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

function Footer() {
  return (
    <footer className="footer bg-btn-primary pt-10 text-white">
      <Container maxWidth="lg" className="mb-10">
        <section className="flex justify-between items-start flex-col md:flex-row">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="social">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2 hover:underline">
                <img src={facebook} alt="facebook" />
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61573756400731"
                >
                  Facebook
                </a>
              </li>
              <li className="flex items-center gap-2 hover:underline">
                <img src={instagram} alt="instagram" />
                <a target="_blank" href="https://www.instagram.com/flistia.ps/">
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-2 hover:underline">
                <img src={linkedin} alt="linkedin" />
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/flistia-marketing-agency/ "
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="links">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <li className="hover:underline">
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li className="hover:underline">
                <Link to="/about-us">About Flistia</Link>
              </li>
              <li className="hover:underline">
                <Link to="/our-work">Our Work</Link>
              </li>
              <li className="hover:underline">
                <Link to="/services">Our Services</Link>
              </li>
            </ul>
          </div>
          <div className="contact-us flex flex-col gap-2">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="phone flex items-center gap-2">
              <img src={phone} alt="phone" /> +970 594 269 418
            </p>
            <p className="email flex items-center gap-2">
              <img src={email} alt="email" /> info@flistia.com
            </p>
          </div>
        </section>
      </Container>
      <p className="text-center text-md bg-separator text-heading-3">
        &copy; {new Date().getFullYear()} Flistia Co. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

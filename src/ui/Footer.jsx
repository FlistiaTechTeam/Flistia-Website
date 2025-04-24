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
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="logo flex flex-col items-center md:items-start">
            <img src={logo} alt="logo" className="mb-4" />
            <div className="contact-us flex flex-col gap-2 text-center md:text-left">
              <p className="phone flex items-center gap-2 justify-center md:justify-start">
                <img src={phone} alt="phone" /> +970 594 269 418
              </p>
              <p className="email flex items-center gap-2 justify-center md:justify-start">
                <img src={email} alt="email" /> info@flistia.com
              </p>
            </div>
          </div>
          <div className="social text-center md:text-left">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2 hover:underline justify-center md:justify-start">
                <img src={facebook} alt="facebook" />
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61573756400731"
                >
                  Facebook
                </a>
              </li>
              <li className="flex items-center gap-2 hover:underline justify-center md:justify-start">
                <img src={instagram} alt="instagram" />
                <a target="_blank" href="https://www.instagram.com/flistia.ps/">
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-2 hover:underline justify-center md:justify-start">
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
          <div className="links text-center md:text-left">
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
        </section>
      </Container>
      <p className="text-center text-md bg-separator text-heading-3">
        &copy; {new Date().getFullYear()} Flistia Co. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

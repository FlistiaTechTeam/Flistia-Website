import { memo } from "react";
import logo from "../assets/images/logo/secondary-logo-white.png";
import facebook from "../assets/images/footer/facebook.svg";
import instagram from "../assets/images/footer/instagram.svg";
import linkedin from "../assets/images/footer/linkedin.svg";
import phone from "../assets/images/footer/phone.svg";
import email from "../assets/images/footer/gmail.svg";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

const Footer = memo(function Footer() {
  return (
    <footer className="footer bg-btn-primary pt-10 text-white min-h-[400px] flex flex-col">
      <Container maxWidth="lg" className="mb-10 flex-grow">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="logo flex flex-col items-center md:items-start">
            <div className="h-[150px] w-[150px] mb-4">
              <img
                src={logo}
                alt="Flistia logo"
                className="w-full h-full object-contain"
                width="150"
                height="150"
                loading="eager"
              />
            </div>
            <div className="contact-us flex flex-col gap-2 text-center md:text-left">
              <p className="phone flex items-center gap-2 justify-center md:justify-start h-[20px]">
                <img
                  src={phone}
                  alt="phone icon"
                  width="20"
                  height="20"
                  loading="eager"
                  className="w-5 h-5"
                />
                <span className="whitespace-nowrap">+970 594 269 418</span>
              </p>
              <p className="email flex items-center gap-2 justify-center md:justify-start h-[20px]">
                <img
                  src={email}
                  alt="email icon"
                  width="20"
                  height="20"
                  loading="eager"
                  className="w-5 h-5"
                />
                <span className="whitespace-nowrap">info@flistia.com</span>
              </p>
            </div>
          </div>
          <div className="social text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 h-[28px]">Follow Us</h3>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2 hover:underline justify-center md:justify-start h-[20px]">
                <img
                  src={facebook}
                  alt="facebook icon"
                  width="20"
                  height="20"
                  loading="eager"
                  className="w-5 h-5"
                />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/profile.php?id=61573756400731"
                  className="whitespace-nowrap"
                >
                  Facebook
                </a>
              </li>
              <li className="flex items-center gap-2 hover:underline justify-center md:justify-start h-[20px]">
                <img
                  src={instagram}
                  alt="instagram icon"
                  width="20"
                  height="20"
                  loading="eager"
                  className="w-5 h-5"
                />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/flistia.ps/"
                  className="whitespace-nowrap"
                >
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-2 hover:underline justify-center md:justify-start h-[20px]">
                <img
                  src={linkedin}
                  alt="linkedin icon"
                  width="20"
                  height="20"
                  loading="eager"
                  className="w-5 h-5"
                />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/flistia-marketing-agency/"
                  className="whitespace-nowrap"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="links text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 h-[28px]">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <li className="hover:underline h-[20px]">
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li className="hover:underline h-[20px]">
                <Link to="/about-us">About Flistia</Link>
              </li>
              <li className="hover:underline h-[20px]">
                <Link to="/our-work">Our Work</Link>
              </li>
              <li className="hover:underline h-[20px]">
                <Link to="/services">Our Services</Link>
              </li>
            </ul>
          </div>
        </section>
      </Container>
      <p className="text-center text-md bg-separator text-heading-3 h-[30px] flex items-center justify-center">
        &copy; {new Date().getFullYear()} Flistia Co. All rights reserved.
      </p>
    </footer>
  );
});

export default Footer;

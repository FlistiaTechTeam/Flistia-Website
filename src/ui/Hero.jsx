import { IconButton, Container } from "@mui/material";
import dropDown from "../assets/images/hero-section/drop-down.svg";
import Button from "./Button";
import { Link } from "react-router-dom";
import HeroImage from "../assets/images/hero-section/hero-background.svg";
function Hero() {
  return (
    <section
      className="hero h-screen px-4"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="lg">
        <div className="hero-body flex flex-col justify-between items-center md:pt-20 pt-10 gap-10">
          <div className="hero-content text-center">
            <h1 className="title font-bold md:text-title text-4xl max-w-3xl md:leading-20 leading-12">
              Your Story Our Strategy{" "}
              <span className="text-heading-1 ">Your Success</span>
            </h1>
            <p className="md:text-subtitle text-sm font-semibold text-paragraph max-w-lg mx-auto mt-8">
              Affordable, innovative marketing solutions tailored to small
              businesses and startups.
            </p>
          </div>
          <div className="hero-cta flex flex-col justify-center items-center gap-10">
            <Link to="/contact-us">
              <Button>Contact Us</Button>
            </Link>
            <IconButton className="drop-down m-auto w-fit">
              <img className="w-6 h-6" src={dropDown} alt="" />
            </IconButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;

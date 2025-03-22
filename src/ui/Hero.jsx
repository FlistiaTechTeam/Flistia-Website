import { IconButton, Container } from "@mui/material";
import dropDown from "../assets/images/hero-section/drop-down.svg";
import Button from "./Button";
import { Link } from "react-router-dom";
import MoonSlice from "../assets/images/hero-section/moon-slice.svg";
import RocketImage from "../assets/images/hero-section/rocket.svg";
import BroadcastImage from "../assets/images/hero-section/broadcast.svg";
function Hero() {
  return (
    <section className="hero h-screen">
      <img
        src={RocketImage}
        alt=""
        className="absolute rocket left-0 w-60 bottom-60 sm:w-md lg:top-15 lg:w-lg"
      />
      <img
        src={BroadcastImage}
        alt=""
        className="absolute broadcast right-5 -bottom-13 w-54 sm:w-80 lg:right-15 lg:w-sm"
      />
      <img src={MoonSlice} alt="" className="absolute bottom-0 w-full " />
      <Container maxWidth="lg">
        <div className="hero-body flex flex-col justify-between items-center pt-15 gap-10 md:pt-20 px-5">
          <div className="hero-content text-center slide-in sm:w-1/2 lg:w-auto">
            <h1 className="title font-bold text-5xl max-w-3xl leading-12 sm:leading-15 lg:leading-20 lg:text-6xl">
              Your Story Our Strategy{" "}
              <span className="text-heading-1 ">Your Success</span>
            </h1>
            <p className="text-sm font-semibold text-paragraph max-w-lg mx-auto mt-8 lg:text-subtitle">
              Affordable, innovative marketing solutions tailored to small
              businesses and startups.
            </p>
          </div>
          <div className="hero-cta flex flex-col justify-center items-center gap-10 z-1">
            <Link to="/contact-us">
              <Button>Contact Us</Button>
            </Link>
            <IconButton className="drop-down m-auto w-fit animate-bounce">
              <img className="w-6 h-6" src={dropDown} alt="" />
            </IconButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;

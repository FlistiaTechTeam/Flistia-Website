import { IconButton, Container } from "@mui/material";
import { memo, useCallback } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import dropDown from "../assets/images/hero-section/drop-down.svg";
import MoonSlice from "../assets/images/hero-section/moon-slice.svg";
import RocketImage from "../assets/images/hero-section/rocket.svg";
import BroadcastImage from "../assets/images/hero-section/broadcast.svg";

// memoize the Hero component to prevent unnecessary re-renders, since it's a large component
const Hero = memo(function Hero() {
  // no need to recreate the scrollToElement function on every render
  const scrollToElement = useCallback(() => {
    const element = document.getElementById("why-flistia");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // width and height are set to prevent layout shifts
  // because layout shifts will cause the page to flicker and cause a bad user experience
  return (
    <section className="hero h-screen relative">
      <img
        src={RocketImage}
        alt="Rocket illustration"
        loading="eager"
        className="absolute rocket left-0 w-60 bottom-60 sm:w-md lg:top-15 lg:w-lg"
        width="240"
        height="240"
      />
      <img
        src={BroadcastImage}
        alt="Broadcast illustration"
        loading="eager"
        className="absolute broadcast right-5 -bottom-13 w-54 sm:w-80 lg:right-15 lg:w-sm"
        width="320"
        height="320"
      />
      <img
        src={MoonSlice}
        alt="Moon slice decoration"
        loading="eager"
        className="absolute w-full bottom-0"
        width="1920"
        height="200"
      />
      <Container maxWidth="lg">
        <div className="hero-body flex flex-col justify-between items-center pt-15 gap-10 md:pt-20 px-5">
          <div className="hero-content text-center slide-in sm:w-1/2 lg:w-auto">
            <h1 className="title font-semibold text-5xl max-w-3xl leading-12 sm:leading-15 lg:leading-20 lg:text-6xl">
              Your Story Our Strategy{" "}
              <span className="text-heading-1">Your Success</span>
            </h1>
            <p className="text-sm text-paragraph max-w-lg mx-auto mt-8 lg:text-subtitle">
              Affordable, innovative marketing solutions tailored to small
              businesses and startups.
            </p>
          </div>
          <div className="hero-cta flex flex-col justify-center items-center gap-10 z-1">
            <Link to="/contact-us">
              <Button aria-label="Contact Flistia">Contact Us</Button>
            </Link>
            <IconButton
              onClick={scrollToElement}
              className="drop-down m-auto w-fit animate-bounce"
              aria-label="Scroll to Why Flistia section"
            >
              <img
                className="w-6 h-6"
                src={dropDown}
                alt="Scroll down"
                width="24"
                height="24"
              />
            </IconButton>
          </div>
        </div>
      </Container>
    </section>
  );
});

export default Hero;

import { memo, useCallback } from "react";
import dropDown from "../../assets/images/hero-section/drop-down.svg";
import { IconButton, Container } from "@mui/material";
import Left from "../../assets/images/about-us/hero/left.png";
import Right from "../../assets/images/about-us/hero/right.png";
import top from "../../assets/images/about-us/hero/top.png";

const Hero = memo(function Hero() {
  const scrollToElement = useCallback(() => {
    const element = document.getElementById("flistia-story");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section className="hero h-screen relative">
      <img
        src={Left}
        alt="Rocket illustration"
        loading="eager"
        className="absolute rocket left-0 w-60 top-0 sm:w-md lg:w-lg"
        width="240"
        height="240"
      />
      <img
        src={top}
        alt="Broadcast illustration"
        loading="eager"
        className="absolute broadcast -top-10 right-[28%] md:block hidden"
        width="320"
        height="320"
      />
      <img
        src={Right}
        alt="Moon slice decoration"
        loading="eager"
        className="absolute right-0"
        width="320"
        height="320"
      />
      <Container
        maxWidth="lg"
        className="flex flex-col justify-center items-center h-full mt-10"
      >
        <h1 className="z-2 sm:text-7xl text-5xl font-semibold text-center mb-8 sm:leading-16 max-w-[37.5rem]">
          Meet the Visionaries Behind Your{" "}
          <span className="text-heading-1">Success</span>
        </h1>
        <p className="z-2 text-lg text-center max-w-lg mx-auto mb-12">
          At{" "}
          <span className="font-bold italic text-lg text-flistia-blue">
            Flistia
          </span>
          , we don’t just tell stories—we craft legends. Our team of innovators,
          creators, and strategists is here to transform your brand into a
          <span className="text-heading-1"> Masterpiece</span>.
        </p>
        <div className="flex flex-col items-center">
          <h2 className="z-2 text-3xl font-bold mb-4 text-center">
            Discover Our Story
          </h2>
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
      </Container>
    </section>
  );
});

export default Hero;

import { Container } from "@mui/material";
import affordability from "../assets/images/why-flistia-section/affordability.png";
import innovation from "../assets/images/why-flistia-section/innovation.png";
import storytelling from "../assets/images/why-flistia-section/story-telling.png";
import Button from "./Button";
import { Link } from "react-router-dom";
function WhyFlistia() {
  return (
    <section className="why-flistia bg-separator -top-16 relative py-10">
      <Container maxWidth="lg">
        <h2 className="section-title py-8 text-center md:text-left">
          Why <span>Flistia</span>
        </h2>
        <div className="cards grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 px-5 sm:px-10 md:px-20">
          <div className="card bg-white p-6 rounded-lg flex flex-col gap-3">
            <h3 className="text-card-heading font-semibold">Affordability</h3>
            <p className="text-card-paragraph">
              Tailored marketing solutions at prices small businesses can
              afford.
            </p>
            <div className="card-icon self-end">
              <img src={affordability} alt="hand with coin floating in it" />
            </div>
          </div>{" "}
          <div className="card bg-white p-6 rounded-lg flex flex-col gap-3">
            <h3 className="text-card-heading font-semibold">Story Telling</h3>
            <p className="text-card-paragraph">
              We craft campaigns that resonate with your audience.
            </p>
            <div className="card-icon self-end">
              <img src={storytelling} alt="open book" />
            </div>
          </div>{" "}
          <div className="card bg-white p-6 rounded-lg flex flex-col gap-3">
            <h3 className="text-card-heading font-semibold">Innovation</h3>
            <p className="text-card-paragraph">
              Youth-driven creativity for modern marketing challenges
            </p>
            <div className="card-icon self-end">
              <img
                src={innovation}
                alt="light-pulp with atoms floating around it"
              />
            </div>
          </div>
        </div>
        <div className="text-center mt-15">
          <Link to="/about-us">
            <Button>Who We Are?</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default WhyFlistia;

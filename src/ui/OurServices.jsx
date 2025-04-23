import { Container } from "@mui/material";
import marketing from "../assets/images/our-services/marketing.svg";
import production from "../assets/images/our-services/production.svg";
import consultation from "../assets/images/our-services/consultation.svg";
import Button from "./Button";
import { Link } from "react-router-dom";
function OurServices() {
  return (
    <section id="our-services" className="our-services -top-16 relative py-8">
      <Container maxWidth="lg">
        <h2 className="section-title text-center md:text-left">
          Our <span>Services</span>
        </h2>
        <div className="cards grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 px-5 sm:px-10 md:px-20">
          <div className="card bg-white rounded-lg flex flex-col">
            <h3 className="text-card-heading font-semibold">Marketing</h3>
            <div className="card-image self-end">
              <img src={marketing} alt="hand with coin floating in it" />
            </div>
            <div className="card-paragraph text-card-paragraph">
              <p>
                Social media management, content creation, SEO, email marketing,
                and storytelling campaigns
              </p>
              <Button size="small">Learn More</Button>
            </div>
          </div>{" "}
          <div className="card bg-white  rounded-lg flex flex-col">
            <h3 className="text-card-heading font-semibold">Production</h3>
            <div className="card-image self-end">
              <img src={production} alt="open book" />
            </div>
            <div className="card-paragraph text-card-paragraph">
              <p>
                video production, photography, graphic design, digital content
                production, post-production
              </p>
              <Button size="small">Learn More</Button>
            </div>
          </div>{" "}
          <div className="card bg-white rounded-lg flex flex-col">
            <h3 className="text-card-heading font-semibold">Consultation</h3>
            <div className="card-image self-end">
              <img
                src={consultation}
                alt="light-pulp with atoms floating around it"
              />
            </div>
            <div className="card-paragraph text-card-paragraph">
              <p>Marketing strategy</p>
              <Button size="small">Learn More</Button>
            </div>
          </div>
        </div>
        <div className="text-center mt-15">
          <Link to="/services">
            <Button>Explore Our Services</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default OurServices;

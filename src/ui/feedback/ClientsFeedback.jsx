import { Container } from "@mui/material";
import Button from "../Button";
import { Link } from "react-router-dom";
import FeedbackSlider from "./FeedbackSlider";
import LogoMarquee from "./LogoMarquee";

function ClientsFeedback() {
  return (
    <section
      id="clients-feedback"
      className="clients-feedback bg-separator  relative py-8 overflow-hidden"
    >
      <Container maxWidth="lg">
        <h2 className="pb-4 section-title text-center md:text-left">
          Clients <span>Feedback</span>
        </h2>
        <section>
          <LogoMarquee />
          <FeedbackSlider />
        </section>
        <div className="text-center">
          <Link to="/our-work">
            <Button>Checkout Our Work!</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default ClientsFeedback;

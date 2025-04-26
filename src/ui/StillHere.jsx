import Button from "./Button";
import { Link } from "react-router-dom";
import image from "../assets/images/still-here/home.svg";
import { Container } from "@mui/material";

function StillHere() {
  return (
    <section id="still-here" className="still-here relative pt-8">
      <Container maxWidth="lg">
        <section className="flex flex-col xl:flex-row justify-between text-center xl:text-left gap-10">
          <div className="info flex flex-col">
            <h3 className="section-title text-center xl:text-left ">
              You're still here!
            </h3>
            <p className="semi-bold text-card-paragraph pb-4">
              Don't let your Success go the way of the
              <br /> dinosaurs. get started now!
            </p>
            <Link to="/services">
              <Button
                size="small"
                className="w-auto"
                aria-label="Explore Flistia's services"
              >
                Checkout Our Services!
              </Button>
            </Link>
          </div>
          <div className="image self-center xl:self-start">
            <img
              className="-bottom-[2px] relative"
              src={image}
              alt="still-here"
            />
          </div>
        </section>
      </Container>
    </section>
  );
}

export default StillHere;

import Button from "./Button";
import { Link } from "react-router-dom";
import image from "../assets/images/still-here/home.svg";
import { Container } from "@mui/material";

function StillHere() {
  return (
    <section id="still-here" className="still-here relative py-8">
      <Container maxWidth="lg">
        <section className="flex flex-col md:flex-row justify-between">
          <div className="info flex flex-col">
            <h3 className="section-title text-center md:text-left ">
              You're still here!
            </h3>
            <p className="semi-bold text-card-paragraph pb-4">
              Don’t let your Success go the way of the
              <br /> dinosaurs. get started now!
            </p>
            <Link to="/services">
              <Button size="small" className="w-auto">
                Checkout Our Services!
              </Button>
            </Link>
          </div>
          <div className="image">
            <img src={image} alt="still-here" />
          </div>
        </section>
      </Container>
    </section>
  );
}

export default StillHere;

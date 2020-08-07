import React from "react";
import "./Passenger.scss";
import "react-bootstrap";
import { safety, difference } from "../../assets/dummy-data/Career";
import { Container, Image } from "react-bootstrap";
import { HeaderSection } from "../../uiComponents";
import AppInstruction from "../../uiComponents/app-instruction/AppInstruction";
import PickCategory from "../../uiComponents/PickCategory/PickCategory";

function renderListItem(array) {
  if (array && array.length) {
    return array.map((object, index) => {
      return (
        <li key={index}>
          <Image draggable={false} src={object.image} />
          <h6>{object.title}</h6>
          {object.description ? <p>{object.description}</p> : null}
        </li>
      );
    });
  }
  return null;
}

function Passenger() {
  return (
    <div className="passenger">
      <HeaderSection
        style="passenger-page-header"
        upperTitle="ride with siayara"
        title="we care about you"
        downArrowShow={true}
      />
      <section className="passenger-text">
        <Container>
          <p>
            Siayara aim’s to provide quality service for all our Passengers, not
            just with low rates but by gaining trust, maintain transparency and
            reducing the troubles being faced. Siayara also provides 24/7
            support, which means anytime of the day whether it’s during the ride
            or after the ride we are here to answer all your queries and
            concerns.
          </p>
        </Container>
      </section>
      <section className="passenger-safety-section">
        <Container>
          <div className="safety-box">
            <h1>your safety is our priority</h1>
          </div>
          <ul className="safety-process ">{renderListItem(safety)}</ul>
        </Container>
      </section>
      <section className="your-destination">
        <AppInstruction />
      </section>
      <section className="difference-section">
        <Container>
          <div>
            <h1>How is Siayara Better?</h1>
            <p>
              At Siayara, we care about our Passengers. We want them to have a
              great experience with minimal trouble in setting up and finding a
              ride. Your Security is our priority, any time of the day we are
              here 24/7to look after our Passengers showing we care about them.
              Lower rates, Siayara has worked on a model which helps our
              passenger to experience lower rates.
            </p>
          </div>
          <ul className="difference">{renderListItem(difference)}</ul>
        </Container>
      </section>
      <section className="category-section">
        <Container>
          <PickCategory />
        </Container>
      </section>
    </div>
  );
}

export default Passenger;

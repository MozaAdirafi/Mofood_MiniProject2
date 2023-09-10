import React from "react";

import { Container, Row, Col } from "reactstrap";
import "./choose-us.css";
import japanfood from "../../assets/images/japanfood.webp";

const ChooseUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="japanimg">
            <img src={japanfood} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__content">
              <h4>Discover Our Identity</h4>
              <h2>Explore the Advantages We Extend to You</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                officiis impedit rem neque minus adipisci.
              </p>
            </div>

            <div className="features mt-4">
              <div className="feature1 d-flex align-items-center gap-5">
                <div className="single__feature">
                  <span>
                    <i class="ri-truck-line"></i>
                  </span>
                  <h6>Free Home Delivery</h6>
                  <p>Savor the Convenience of Prompt Delivery to Your Doorstep</p>
                </div>

                <div className="satisfaction">
                <div className="single__feature">
                  <span className="feature__icon-two">
                    <i class="ri-money-dollar-circle-line"></i>
                  </span>
                  <h6>Satisfaction Guaranteed</h6>
                  <p>Our Commitment to Quality - Your Assurance of Returns and Refunds</p>
                </div>
                </div>
              </div>

              <div className="feature1 mt-3 d-flex align-items-center gap-5">
                <div className="single__feature">
                  <span className="feature__icon-3">
                    <i class="ri-secure-payment-line"></i>
                  </span>
                  <h6>Seamless and Secure Payments</h6>
                  <p>Relish Worry-Free Transactions with Our Protected Payment Methods</p>
                </div>

                <div className="single__feature">
                  <span className="feature__icon-4">
                    <i class="ri-24-hours-line"></i>
                  </span>
                  <h6>Round-the-Clock Customer Care</h6>
                  <p>Reliable Assistance Available 24/7 to Enhance Your Dining Experience</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;

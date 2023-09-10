import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./testimonial.css";
import testimonialImg1 from "../../assets/images/t1.jpg";
import testimonialImg2 from "../../assets/images/t2.jpg";
import testimonialImg3 from "../../assets/images/t3.jpg";
import testimonialImg4 from "../../assets/images/t4.jpg";
import testimonial from "../../assets/images/testimonial-img.png";
import titlesvg from "../../assets/images/title-shape.svg";
import "font-awesome/css/font-awesome.min.css";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const testimonials = [
    {
      name: "Declan Rice",
      image: testimonialImg1, 
      content: "The pizza was delicious, best I've had in years. Highly recommended!",
    },
    {
      name: "Mark Fish",
      image: testimonialImg2, 
      content: "Their sushi is top-notch, fresh and flavorful. A must-try!",
    },
    {
      name: "Nacho Fernandez",
      image: testimonialImg3, 
      content: "The burger was juicy, and the fries were crispy. Loved it!",
    },
    {
      name: "Baba Rahman",
      image: testimonialImg4, 
      content: "Their desserts are heavenly; I can't resist their chocolate cake!",
    },
  ];

  return (
    <section className="testimonials section">
      <div className="sec-wp">
        <Container>
          <Row>
            <Col lg="12">
              <div className="sec-title text-center mb-5">
                <p className="sec-sub-title mb-3">What they say</p>
                <h2 className="h2-title">What our customers <span>say about us</span></h2>
                <div className="sec-title-shape mb-4">
                  <img src={titlesvg} alt="" />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="5">
              <div className="testimonials-img">
                <img src={testimonial} alt="" />
              </div>
            </Col>
            <Col lg="7">
              <Row>
                {testimonials.map((testimonial, index) => (
                  <Col sm="6" key={index}>
                    <div className="testimonials-box">
                      <div className="testimonial-box-top">
                        <div
                          className="testimonials-box-img back-img"
                          style={{ backgroundImage: `url(${testimonial.image})` }}
                        ></div>
                      </div>
                      <div className="testimonials-box-text">
                        <h3 className="h3-title">{testimonial.name}</h3>
                        <p>{testimonial.content}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Testimonials;

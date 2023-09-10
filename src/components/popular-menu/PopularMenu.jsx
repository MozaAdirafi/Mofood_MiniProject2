import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom"; 
import ProductCard from "../product-card/ProductCard";
import "./popular-menu.css";

const PopularMenu = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetch("https://api.mudoapi.tech/menus")
      .then((response) => response.json())
      .then((data) => {
        if (data.success && data.data && data.data.Data) {
          const filteredData = data.data.Data.filter((item) =>
            [1, 3, 4, 5].includes(item.id)
          );
          setMenuData(filteredData);
        }
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
      });
  }, []);

  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2 className="popular__menu-title">Popular food menu</h2>
          </Col>

          {menuData.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
              <Link to={`/detail/${item.id}`}>
                <ProductCard
                  item={{
                    id: item.id.toString(),
                    title: item.name,
                    price: item.price,
                    imgUrl: item.imageUrl,
                  }}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PopularMenu;

import "./product-card.css";
import PropTypes from 'prop-types';

const ProductCard = ({ item }) => {
  const { title, imgUrl, price } = item;

  return (
    <div className="single__product">
      <div className="product__img">
        <img src={imgUrl} alt="" className="product-card-img"  />
      </div>

      <div className="product__content">
        <div className="rating text-center">
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
        </div>

        <h6>{title}</h6>

        <div className=" d-flex align-items-center justify-content-between">
          <span className="price d-flex align-items-center">
            {" "}
            Price: $<span>{price}</span>
          </span>
          <span className="shopping__icon">
            <i className="ri-shopping-cart-line"></i>
          </span>
        </div>
      </div>
    </div>
  );

};

ProductCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};



export default ProductCard;

import { useRef } from "react";
import "./header.css";
import { Container } from "reactstrap";
import { useNavigate } from "react-router-dom"; 

const navLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "About",
    url: "/",
  },
  {
    display: "Menu",
    url: "/",
  },
  {
    display: "Recipes",
    url: "/",
  },
];

const Header = () => {
  const menuRef = useRef();
  const navigate = useNavigate(); 

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");


  const handleLogout = () => {

    navigate("/login");
  };

  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <span>
                <i className="ri-restaurant-fill"></i>
              </span>{" "}
              MoFood
            </h2>
          </div>

          <div className="nav__menu " ref={menuRef}>
            <div className="nav__list__wrapper d-flex align-items-center gap-5">
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <a href={item.url} onClick={menuToggle}>
                      {item.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <button className="logout__button" onClick={handleLogout}>
              <i className="ri-logout-box-line"></i>
              Logout
            </button>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

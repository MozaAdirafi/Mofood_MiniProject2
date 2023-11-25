import { Fragment } from "react";

import Header from "../components/header/Header";
import HeroSlider from "../components/hero-slider/HeroSlider";
import PopularMenu from "../components/popular-menu/PopularMenu";
import ChooseUs from "../components/choose-us/ChooseUs";
import MenuPack from "../components/menu-pack/MenuPack";
import Testimonials from "../components/testimonials/Testimonials";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSlider />
      <PopularMenu />
      <ChooseUs />
      <MenuPack />
      <Testimonials />
      <Footer />
    </Fragment>
  );
};

export default Home;

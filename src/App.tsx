import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

// assets
import TeeShirt from "/src/assets/tee-shirts.png";
import Shirts from "/src/assets/shirts.png";
import Pajamas from "./assets/pajamas.png";
import Boxers from "./assets/boxers.png";
import Coords from "./assets/co-ords.png";
import FullSleeves from "./assets/full-sleeves.png";
import Shorts from "./assets/shorts.png";
import Joggers from "./assets/joggers.png";
import Denim from "./assets/denim.jpg";

// assets - categories
import Pearls from "./assets/categories/pearls.jpg";
import Red from "./assets/categories/red.jpg";
import Minty from "./assets/categories/minty.jpg";
import Knit from "./assets/categories/knit pullovers.jpg";
import Velvet from "./assets/categories/velvet rich.jpg";

import FooterTop from "./components/Footer/FooterTop/FooterTop";
import FooterBottom from "./components/Footer/FooterBottom/FooterBottom";
import Header from "./components/Header/Header";
import MiniCard from "./components/Cards/MiniCard/MiniCard";
import TrendCard from "./components/Cards/TrendCard/TrendCard";
import {
  CategoryCardMedium,
  CategoryCardSmall,
} from "./components/Cards/CategoryCard/CategoryCard";
import CustomCarousel from "./components/CustomCarousel/CustomCarousel";
import { Col } from "react-bootstrap";
import MobileFooter from "./components/Footer/MobileFooter/MobileFooter";

function App() {
  const [isOffer] = useState(true);

  const categories = {
    list1: [
      {
        type: "Shirts",
        image: Shirts,
      },
      {
        type: "Pajamas",
        image: Pajamas,
      },
      {
        type: "Boxers",
        image: Boxers,
      },
      {
        type: "Co-ords",
        image: Coords,
      },
    ],
    list2: [
      {
        type: "Full Sleeves",
        image: FullSleeves,
      },
      {
        type: "Tee Shirts",
        image: TeeShirt,
      },
      {
        type: "Shorts",
        image: Shorts,
      },
      {
        type: "Joggers",
        image: Joggers,
      },
    ],
  };

  return (
    <>
      <Header isOffer={isOffer} />

      <div className="parent-container">
        <div className="content-container">
          <section className="section-1">
            <MiniCard />
            <CustomCarousel />
            <TrendCard />
          </section>

          <section className="section-2 w-78">
            <div className="design--div">
              <h4 className="design--heading">Design of the week</h4>
              <div className="design--wrapper mt-3">
                <Col xs="6" md="6" className="p-0 m-0">
                  <a href="" className="w-100">
                    <img
                      src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1703576682.jpg"
                      alt="shop men"
                      style={{
                        borderTopLeftRadius: "2rem",
                        borderBottomLeftRadius: "2rem",
                      }}
                      className="w-100"
                    />
                  </a>
                </Col>
                <Col xs="6" md="6" className="p-0 m-0">
                  <a href="" className="w-100">
                    <img
                      src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1703576683.jpg"
                      alt="shop women"
                      style={{
                        borderTopRightRadius: "2rem",
                        borderBottomRightRadius: "2rem",
                      }}
                      className="w-100"
                    />
                  </a>
                </Col>
              </div>
            </div>
          </section>

          <section className="section-3 w-78 mt-5">
            <h4 className="h4-20">Trending Categories 🔥</h4>
            <p className="p-16 mb-4">
              Stay ahead of the fashion game with these hot trends to try!
            </p>
            <div className="category-wrapper mt-3 w-100">
              <div className="category-wrapper--child">
                <div>
                  <CategoryCardMedium image={Denim} title="Denim" />
                </div>
                <div>
                  <CategoryCardSmall
                    image={Pearls}
                    title="Pearls"
                  ></CategoryCardSmall>
                </div>
              </div>
              <div className="category-wrapper--child">
                <div>
                  <CategoryCardSmall image={Knit} title="Knit" />
                </div>
                <div>
                  <CategoryCardMedium image={Velvet} title="Velvet" />
                </div>
              </div>
              <div className="category-wrapper--child">
                <div>
                  <CategoryCardMedium image={Red} title="Classic" />
                </div>
                <div>
                  <CategoryCardSmall image={Minty} title="Mint" />
                </div>
              </div>
            </div>
          </section>

          <section className="section-4 w-78 mt-5 mb-5">
            <h3 className="h4-20">Too hot to be missed</h3>
            <div className="section-4--div mt-3 row">
              <Col xs="12" md="6">
                <div
                  className="section-4--child card-hover"
                  style={{
                    backgroundImage:
                      'url("https://images.bewakoof.com/uploads/grid/app/Customise-Desktop-midsize-Banner-1699360277.jpg")',
                  }}
                ></div>
              </Col>
              <Col xs="12" md="6">
                <div
                  className="section-4--child card-hover"
                  style={{
                    backgroundImage:
                      'url("https://images.bewakoof.com/uploads/grid/app/Plus-Size-Desktop-midsize-Banner--1--1699360278.jpg")',
                  }}
                ></div>
              </Col>
            </div>
          </section>

          <section className="section-5  w-78 mt-5 mb-5 ">
            <h3 className="h4-20">Categories to bag</h3>
            <div className="section-5--wrapper mt-4">
              <div className="section-5--row mb-4">
                {categories.list1.map((item) => {
                  return (
                    <div className="section-5--child card-hover">
                      <div
                        className="section-5--img"
                        style={{ backgroundImage: `url("${item.image}")` }}
                      ></div>
                      <p
                        className="p-14-custom"
                        style={{ marginTop: "0.4rem" }}
                      >
                        {item.type}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="section-5--row mt-5 mb-5">
                {categories.list2.map((item) => {
                  return (
                    <div className="section-5--child card-hover">
                      <div
                        className="section-5--img"
                        style={{ backgroundImage: `url("${item.image}")` }}
                      ></div>
                      <p
                        className="p-14-custom"
                        style={{ marginTop: "0.4rem" }}
                      >
                        {item.type}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="extra-div mobile-view">
            <button
              className="btn-yellow"
              style={{ textTransform: "uppercase", padding: "10px" }}
            >
              Explore more products
            </button>
            <ul className="more-info pt-4 pb-3 m-0 px-0 py-0">
              <li className="more-info--child">
                <i className="fa-regular fa-star"></i>
                <p className="m-0">Quality</p> <p className="m-0">Assurance</p>
              </li>
              <li className="more-info--child">
                <i className="fa-solid fa-cart-shopping"></i>{" "}
                <p className="m-0">100% secure</p>
                <p className="m-0">payment</p>
              </li>
              <li className="more-info--child">
                <i className="fa-solid fa-earth-americas"></i>{" "}
                <p className="m-0">Shipping</p>
                <p className="m-0">globally</p>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <section className="footer desktop-view">
        <section className="footer--top">
          <FooterTop />
        </section>
        <section className="footer--bottom">
          <FooterBottom />
        </section>
      </section>

      <section
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          backgroundColor: "white",
          borderTop: "1px solid #eaeaea",
          boxShadow: "0px 0px 10px -1px #cbc5c5, 0px 4px 4px #888",
        }}
        className="footer mobile-view pt-2 mt-2"
      >
        <MobileFooter />
      </section>
    </>
  );
}

export default App;

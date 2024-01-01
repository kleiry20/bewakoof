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
import Denim2 from "./assets/denim2.jpg";
import Shirt2 from "./assets/shirt2.jpg";
import Ties from "./assets/ties.jpg";
import Shoes from "./assets/shoes2.jpg";
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
        <div className="container">
          <section className="section-1">
            <MiniCard />
            <CustomCarousel />
            <TrendCard />
          </section>

          <section className="section-2">
            <div className="design--div">
              <h4 className="design--heading">Design of the week</h4>
              <div className="design--wrapper mt-3">
                <a href="">
                  <img
                    src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1703576682.jpg"
                    alt="shop men"
                    style={{
                      borderTopLeftRadius: "2rem",
                      borderBottomLeftRadius: "2rem",
                      width: "34rem",
                      height: "22rem",
                    }}
                  />
                </a>
                <a href="">
                  <img
                    src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1703576683.jpg"
                    alt="shop women"
                    style={{
                      borderTopRightRadius: "2rem",
                      borderBottomRightRadius: "2rem",
                      width: "34rem",
                      height: "22rem",
                    }}
                  />
                </a>
              </div>
            </div>
          </section>

          <section className="section-3 mt-5">
            <h4 className="h4-20">Trending Categories 🔥</h4>
            <p className="p-16">
              Stay ahead of the fashion game with these hot trends to try!
            </p>
            <div className="category-wrapper mt-3">
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

          <section className="section-4 mt-5">
            <h3 className="h4-20">Too hot to be missed</h3>
            <div className="section-4--div mt-3">
              <div
                className="section-4--child card-hover"
                style={{
                  backgroundImage:
                    'url("https://images.bewakoof.com/uploads/grid/app/Customise-Desktop-midsize-Banner-1699360277.jpg")',
                }}
              ></div>
              <div
                className="section-4--child card-hover"
                style={{
                  backgroundImage:
                    'url("https://images.bewakoof.com/uploads/grid/app/Plus-Size-Desktop-midsize-Banner--1--1699360278.jpg")',
                }}
              ></div>
            </div>
          </section>

          <section className="section-5 mt-5">
            <h3 className="h4-20">Categories to bag</h3>
            <div className="section-5--wrapper mt-3">
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
              <div className="section-5--row">
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
        </div>
      </div>

      {/* <section className="footer">
        <section className="footer--top">top</section>
        <section className="footer--bottom">botto</section>
      </section> */}

      <section className="footer">
        <section className="footer--top">
          <FooterTop />
        </section>
        <section className="footer--bottom">
          <FooterBottom />
        </section>
      </section>
    </>
  );
}

export default App;

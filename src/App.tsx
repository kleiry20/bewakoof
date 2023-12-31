import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MiniCard from "./components/Cards/MiniCard/MiniCard";
import TrendCard from "./components/Cards/TrendCard/TrendCard";
import CategoryCard, {
  CategoryCardMedium,
  CategoryCardSmall,
} from "./components/Cards/CategoryCard/CategoryCard";

// assets
import TeeShirt from "/src/assets/tee-shirts.png";
import Shirts from "/src/assets/shirts.png";
import Pajamas from "./assets/pajamas.png";
import Boxers from "./assets/boxers.png";
import Coords from "./assets/co-ords.png";
import FullSleeves from "./assets/full-sleeves.png";
import Shorts from "./assets/shorts.png";
import Joggers from "./assets/joggers.png";
import FooterTop from "./components/Footer/FooterTop/FooterTop";
import FooterBottom from "./components/Footer/FooterBottom/FooterBottom";

function App() {
  const [isOffer] = useState(true);

  const smallCardData = [
    {
      image: TeeShirt,
      title: "Jackets",
    },
    {
      image: "",
      title: "Pastel Stories",
    },
    {
      image: "",
      title: "Striped Shirts",
    },
  ];

  const mediumCardData = [
    {
      image: "",
      title: "Colour Splash",
    },
    {
      image: "",
      title: "Printed Sweatshirt",
    },
    {
      image:
        "https://images.bewakoof.com/t640/men-s-black-hope-t-shirt-300994-1655813841-1.jpg",
      title: "Tee Shirts",
    },
  ];

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
            <TrendCard />
          </section>

          <section className="section-2">
            <div className="design--div">
              <h3 className="design--heading">Design of the week</h3>
              <div className="design--wrapper">
                <a href="">
                  <img
                    src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1703576682.jpg"
                    alt="shop men"
                    style={{
                      borderTopLeftRadius: "2rem",
                      borderBottomLeftRadius: "2rem",
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
                    }}
                  />
                </a>
              </div>
            </div>
          </section>

          <section className="section-3">
            <h3 className="h3-font-style">Trending Categories 🔥</h3>
            <p className="p-14">
              Stay ahead of the fashion game with these hot trends to try!
            </p>
            <div className="category-wrapper">
              <div className="category-wrapper--child">
                <div>
                  <CategoryCardMedium />
                </div>
                <div>
                  <CategoryCardSmall smallCardData={smallCardData} />
                  {/* <CategoryCardSmall smallCardData={smallCardData} /> */}
                </div>
              </div>
              {/* <div className="category-wrapper--child">
                <div>
                  <CategoryCardSmall smallCardData={smallCardData} />
                </div>
                <div>
                  <CategoryCardMedium />
                </div>
              </div>
              <div className="category-wrapper--child">
                <div>
                  <CategoryCardMedium />
                </div>
                <div>
                  <CategoryCardSmall smallCardData={smallCardData} />
                </div>
              </div> */}
            </div>
            {/* <CategoryCard /> */}
          </section>

          <section className="section-4">
            <h3 className="h3-font-style">Too hot to be missed</h3>
            <div className="section-4--div">
              <div
                className="section-4--child"
                style={{
                  backgroundImage:
                    'url("https://images.bewakoof.com/uploads/grid/app/Customise-Desktop-midsize-Banner-1699360277.jpg")',
                }}
              ></div>
              <div
                className="section-4--child"
                style={{
                  backgroundImage:
                    'url("https://images.bewakoof.com/uploads/grid/app/Plus-Size-Desktop-midsize-Banner--1--1699360278.jpg")',
                }}
              ></div>
            </div>
          </section>

          <section className="section-5">
            <h3 className="h3-font-style">Categories to bag</h3>
            <div className="section-5--wrapper">
              <div className="section-5--row">
                {categories.list1.map((item) => {
                  return (
                    <div className="section-5--child">
                      <div
                        className="section-5--img"
                        style={{ backgroundImage: `url("${item.image}")` }}
                      ></div>
                      <p className="p-12" style={{ marginTop: "0.4rem" }}>
                        {item.type}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="section-5--row">
                {categories.list2.map((item) => {
                  return (
                    <div className="section-5--child">
                      <div
                        className="section-5--img"
                        style={{ backgroundImage: `url("${item.image}")` }}
                      ></div>
                      <p className="p-12" style={{ marginTop: "0.4rem" }}>
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
          <FooterTop/>
        </section>
        <section className="footer--bottom">
          <FooterBottom/>
        </section>
      </section>
    </>
  );
}

export default App;

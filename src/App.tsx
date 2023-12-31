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
            <h3 className="h3-font-style">Trending Categories</h3>
            <p className="p-14">
              Stay ahead of the fashion game with these hot trends to try!
            </p>
            <div className="category-wrapper">
              <div className="category-wrapper--child">
                <div>
                  <CategoryCardMedium />
                </div>
                <div>
                  {smallCardData.map((smallCardData) => {
                    return <CategoryCardSmall smallCardData={smallCardData} />;
                  })}
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
              <div className="section-4--child">1</div>
              <div className="section-4--child">2</div>
            </div>
          </section>
        </div>
      </div>

      <section className="footer">footer</section>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MiniCard from "./components/Cards/MiniCard/MiniCard";
import TrendCard from "./components/Cards/TrendCard/TrendCard";

function App() {
  const [isOffer] = useState(true);

  return (
    <>
      <Header isOffer={isOffer} />
      <section className="section-1">
        <MiniCard />
        <TrendCard />
        <div>
          <h3 className="design">Design of the week</h3>
          <img src="/src/assets/best-sellers.png" alt="design of the week" />
        </div>
      </section>

      <section>2</section>
    </>
  );
}

export default App;

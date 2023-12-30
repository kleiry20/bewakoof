import React from "react";
import "./MiniCard.css";

const MiniCard = () => {
  const miniCardTitle = [
    "Live Now",
    "Men",
    "Women",
    "Accessories",
    "Plus Size",
    "Customization",
    "Play",
    "Undrdawg",
    "Teens",
  ];
  return (
    <>
      <div className="minicard--div">
        <ul className="minicard--wrapper">
          {miniCardTitle.map((title) => {
            return (
              <li style={{ textAlign: "center" }}>
                <div className="minicard">
                  <img
                    src="https://images.bewakoof.com/uploads/grid/app/category-icon-for-Desktop-Winterwear-1698217139.jpg"
                    alt=""
                    className="minicard"
                  />
                </div>
                <a className="minicard-font">{title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MiniCard;

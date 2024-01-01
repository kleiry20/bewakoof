import "./MiniCard.css";
import LiveNow from "../../../assets/joggers.png";
import Pajamas from "../../../assets/pajamas.png";
import Boxers from "../../../assets/boxers.png";
import Coords from "../../../assets/co-ords.png";
import Shorts from "../../../assets/shorts.png";
import Joggers from "../../../assets/joggers.png";
import Shirts from "../../../assets/shirts.png";
import Oversized from "../../../assets/oversized.png";
import Tops from "../../../assets/fashion-tops.png";

const MiniCard = () => {
  const miniCardTitle = [
    {
      image: LiveNow,
      title: "Live Now",
    },
    {
      image: Shirts,
      title: "Men",
    },
    {
      image: Tops,
      title: "Women",
    },
    {
      image: Shorts,
      title: "Accessories",
    },
    {
      image: Pajamas,
      title: "Plus Size",
    },
    {
      image: Oversized,
      title: "Customization",
    },
    {
      image: Joggers,
      title: "Play",
    },
    {
      image: Coords,
      title: "Undrdawg",
    },
    {
      image: Boxers,
      title: "Teens",
    },
  ];
  return (
    <>
      <div className="minicard--div w-100">
        <ul className="minicard--wrapper">
          {miniCardTitle.map((item) => {
            return (
              <li style={{ textAlign: "center" }}>
                <div className="minicard card-hover">
                  <img src={item.image} alt="" className="minicard" />
                </div>
                <a className="minicard-font">{item.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MiniCard;

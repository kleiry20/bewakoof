import "./TrendCard.css";
import NewArrivals from "../../../assets/new-arrival.png";
import BestSellers from "../../../assets/best-sellers.png";
import OfficialCollaboration from "../../../assets/official-collaboration.png";
import VoteForDesign from "../../../assets/vote-for-design.png";
import LastSizeLeft from "../../../assets/last-size.png";

const TrendCard = () => {
  const trendCardData = [
    {
      pic: NewArrivals,
      title: "New Arrivals",
    },
    {
      pic: BestSellers,
      title: "Best Sellers",
    },
    {
      pic: OfficialCollaboration,
      title: "Official Collaboration",
    },
    {
      pic: VoteForDesign,
      title: "Vote for Design",
    },
    {
      pic: LastSizeLeft,
      title: "Last Size Left",
    },
    {
      pic: "https://images.bewakoof.com/uploads/grid/app/Thumbnails-Msite-Plus-size--2--1697714054.jpg",
      title: "Plus Size",
    },
  ];
  return (
    <div className="trendcard--div mt-4 w-100">
      <ul className="trendcard--wrapper pb-3">
        {trendCardData.map((item) => {
          return (
            <li className="trendcard--bg card-hover">
              <img src={item.pic} alt="" className="trendcard" />
              <a className="trendcard-font">{item.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TrendCard;

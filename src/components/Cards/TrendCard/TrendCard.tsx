import "./TrendCard.css";

const TrendCard = () => {
  // const trendCardTitle = [
  //   "New Arrivals",
  //   "Best Sellers",
  //   "Official Collaboration",
  //   "Vote for Design",
  //   "Last Size Left",
  //   "Plus Size",
  // ];
  const trendCardData = [
    {
      pic: "/src/assets/new-arrival.png",
      title: "New Arrivals",
    },
    {
      pic: "/src/assets/best-sellers.png",
      title: "Best Sellers",
    },
    {
      pic: "/src/assets/official-collaboration.png",
      title: "Official Collaboration",
    },
    {
      pic: "/src/assets/vote-for-design.png",
      title: "Vote for Design",
    },
    {
      pic: "/src/assets/last-size.png",
      title: "Last Size Left",
    },
    {
      pic: "https://images.bewakoof.com/uploads/grid/app/Thumbnails-Msite-Plus-size--2--1697714054.jpg",
      title: "Plus Size",
    },
  ];
  return (
    <div className="trendcard--div mt-4 w-100">
      <ul className="trendcard--wrapper">
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

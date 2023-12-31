import React from "react";
import "./CategoryCard.css";

type CategoryCard = {
  isCategoryCardSmall?: boolean;
  isCategoryCardMedium?: boolean;
  smallCardData?: any;
  mediumCardData?: any;
};

// const smallCardData = [
//   {
//     image: "/src/assets/tee-shirts.png",
//     title: "Jackets",
//   },
//   {
//     image: "",
//     title: "Pastel Stories",
//   },
//   {
//     image: "",
//     title: "Striped Shirts",
//   },
// ];

// const mediumCardData = [
//   {
//     image: "",
//     title: "Colour Splash",
//   },
//   {
//     image: "",
//     title: "Printed Sweatshirt",
//   },
//   {
//     image:
//       "https://images.bewakoof.com/t640/men-s-black-hope-t-shirt-300994-1655813841-1.jpg",
//     title: "Tee Shirts",
//   },
// ];

export const CategoryCardSmall = (props: any) => {
  console.log(props, "propsssss");
  console.log(props.title, "propsssss titke");
  const item = Object.values(props);
  return (
    <>
   
        <div
        className="category-card--small"
        style={{ backgroundImage: `url("${props.image}")` }}
        >
        <button className="btn-white">{props.title}</button>
        </div>
    

      {/* {Object.entries(items).map(([key, value]) => {
        return (
          <div
            className="category-card--small"
            style={{ backgroundImage: `url("${props.image}")` }}
          >
            <button className="btn-white">{props.title}</button>
          </div>
        );
      })} */}
    </>
  );
};

export const CategoryCardMedium = (props: any) => {
  return (
    <div
      className="category-card--medium"
      // style={{ backgroundImage: `url("${item.image}")` }}
    >
      {/* <img src="" alt="image" /> */}
      <button className="btn-white">btn-title</button>
    </div>
  );
};

const CategoryCard = ({
  isCategoryCardSmall,
  isCategoryCardMedium,
  smallCardData,
  mediumCardData,
}: CategoryCard) => {
  return (
    <div>
      {/* {isCategoryCardSmall ? (
        <CategoryCardSmall smallCardData={smallCardData} />
      ) : null}
      {isCategoryCardMedium ? <CategoryCardMedium /> : null} */}
      <CategoryCardSmall smallCardData={smallCardData} />
      <CategoryCardMedium mediumCardData={mediumCardData} />
    </div>
  );
};

export default CategoryCard;

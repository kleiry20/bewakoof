import "./MobileFooter.css";

const MobileFooter = () => {
  return (
    <ul className="mobile-footer p-1 pb-3 m-0">
      <li className="mobile-footer--child">
        <i className="fa-solid fa-house"></i>
        Home
      </li>
      <li className="mobile-footer--child">
        <i className="fa-solid fa-list"></i> Categories
      </li>
      <li className="mobile-footer--child">
        <i className="fa-solid fa-rocket"></i> Explore
      </li>
      <li className="mobile-footer--child">
        <i className="fa-regular fa-user"></i> Profile
      </li>
    </ul>
  );
};

export default MobileFooter;

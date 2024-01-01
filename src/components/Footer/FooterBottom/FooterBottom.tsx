import "./FooterBottom.css";

const FooterBottom = () => {
  return (
    <div className="container pt-4">
      <div className="row footer-bottom">
        <div className="col-sm-6 col-md-6 footer-bottom--left">
          {/* <img
            src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
            alt="bewakoof"
            style={{ width: "12rem" }}
          /> */}
          <h4 style={{ color: "#ffc303" }}>Bewakoof</h4>
          <ul
            className="footer-bottom--policy font-14"
            style={{ listStyleType: "none" }}
          >
            <li>15 Days return policy*</li> |<li>Cash on delivery*</li>
          </ul>

          <div>
            <p className="font-14">
              2023 Bewakoof Private Limited. All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 footer-bottom--right">
          <div className="footer-bottom--payment">
            <p className="font-14">100% Secure Payment</p>
            <img
              src="https://images.bewakoof.com/web/secure-payments-image.png"
              alt=""
            />
          </div>
          <div className="footer-bottom--app">
            <p className="font-14">Download The App</p>
            <div className="footer-bottom--appLogo">
              <a>
                <img
                  src="https://images.bewakoof.com/web/app_android_v1.png"
                  title="android app"
                  alt="android app"
                  width="100px"
                />
              </a>
              <a>
                <img
                  src="https://images.bewakoof.com/web/app_ios_v1.png"
                  title="android app"
                  alt="android app"
                  width="100px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;

import "./FooterTop.css";

const FooterTop = () => {
  return (
    <div className="container pb-4">
      <div className="row footer-top">
        <div className="col-sm-6 col-md-3">
          <span className="footer-title">About Bewakoof</span>
          <br />
          <br className="desktop-view" />
          <div className="footer--div">
            <ul className="footer--wrapper p-0">
              <li>
                <a
                  className="font-14 "
                  href="https://www.bewakoof.com/contact-us"
                >
                  Who are we?
                </a>
              </li>
              <li>
                <a
                  className="font-14 "
                  href="https://www.bewakoof.com/myaccount/orders"
                >
                  We're hiring!
                </a>
              </li>
              <li>
                <a
                  className="font-14 "
                  href="https://www.bewakoof.com/myaccount/orders?status=returned"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  className="font-14 "
                  href="https://www.bewakoof.com/contact-us"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  className="font-14 "
                  href="https://www.bewakoof.com/contact-us"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <span className="footer-title">Customer Service</span>
          <br />
          <br className="desktop-view" />
          <div className="footer--div">
            <ul className="footer--wrapper p-0 font-14">
              <li>
                <a href="https://www.bewakoof.com/contact-us">Contact Us</a>
              </li>
              <li>
                <a href="https://www.bewakoof.com/myaccount/orders">
                  Track Order
                </a>
              </li>
              <li>
                <a href="https://www.bewakoof.com/myaccount/orders?status=returned">
                  Return Order
                </a>
              </li>
              <li>
                <a href="https://www.bewakoof.com/contact-us">Cancel Order</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-md-2">
          <span className="footer-title">Quick Links</span>
          <br />
          <br className="desktop-view" />
          <div className="footer--div">
            <ul className="footer--wrapper p-0">
              <li>
                <a href="https://www.bewakoof.com/contact-us">Offers</a>
              </li>
              <li>
                <a href="https://www.bewakoof.com/myaccount/orders">Sitemap</a>
              </li>
              <li>
                <a href="https://www.bewakoof.com/myaccount/orders?status=returned">
                  Brand stores
                </a>
              </li>
              <li>
                <a href="https://www.bewakoof.com/contact-us">Fanbook</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <span className="footer-title">Get update on your inbox</span>
          <br />
          <br className="desktop-view" />
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <input
              className="input-box"
              type="text"
              placeholder="Enter your email address"
            />
            <button className="subscribe-btn">Subscribe</button>
          </div>
          <div className="social">
            <p style={{ margin: "0" }}>
              <i className="fa-brands fa-square-facebook px-1"> </i> 4.7M People
              like this
            </p>
            <p className="mb-2" style={{ margin: "0" }}>
              <i className="fa-brands fa-instagram px-1"></i> 1M Followers
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-pinterest"></i>
              <i className="fa-brands fa-snapchat"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;

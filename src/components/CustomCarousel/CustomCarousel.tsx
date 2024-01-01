import { Carousel } from "react-bootstrap";
import "./CustomCarousel.css";
import CarouselImage from "../../assets/carousel-image.jpg";
import Blazers from "../../assets/blazers.jpg";
import Apparel from "../../assets/apparel.jpg";

const CustomCarousel = () => {
  return (
    <Carousel className="custom-carousel" controls={false} interval={500000}>
      <Carousel.Item>
        <img
          className="caraousel-images"
          src={CarouselImage}
          alt="Premium Coats"
          style={{ height: "500px" }}
        />
        <Carousel.Caption>
          <h3>Premium Coats</h3>
          <p>Starts at 1299</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="caraousel-images"
          src={Blazers}
          alt="Blazers"
          style={{ height: "500px" }}
        />
        <Carousel.Caption>
          <h3>Blazers</h3>
          <p>Starts at 1499</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="caraousel-images"
          src={Apparel}
          alt="First slide"
          style={{ height: "500px" }}
        />
        <Carousel.Caption>
          <h3>Women Tops</h3>
          <p>Starts at 799</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;

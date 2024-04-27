import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Carrousselplateform = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive}>
      <div>
        <img
          src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg"
          alt="trutpilot"
          className="w-24"
        />
        <h3 className="text-sm font-bold py-2">Great platform to learn</h3>
        <p className="text-sm">
          Great platform to learn. Providing the learning environment makes this
          platform...
        </p>
        <div className="flex text-xs mt-1">
          <p>Pranaya Vinjamoori,</p>
          <p>March 23</p>
        </div>
      </div>

      <div>
        <img
          src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg"
          alt="trutpilot"
          className="w-24"
        />
        <h3 className="text-sm font-bold py-2">Great platform to learn</h3>
        <p className="text-sm">
          Great platform to learn. Providing the learning environment makes this
          platform...
        </p>
        <div className="flex text-xs mt-1">
          <p>Pranaya Vinjamoori,</p>
          <p>March 23</p>
        </div>
      </div>

      <div>
        <img
          src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg"
          alt="trutpilot"
          className="w-24"
        />
        <h3 className="text-sm font-bold py-2">Great platform to learn</h3>
        <p className="text-sm">
          Great platform to learn. Providing the learning environment makes this
          platform...
        </p>
        <div className="flex text-xs mt-1">
          <p>Pranaya Vinjamoori,</p>
          <p>March 23</p>
        </div>
      </div>

      <div>
        <img
          src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg"
          alt="trutpilot"
          className="w-24"
        />
        <h3 className="text-sm font-bold py-2">Great platform to learn</h3>
        <p className="text-sm">
          Great platform to learn. Providing the learning environment makes this
          platform...
        </p>
        <div className="flex text-xs mt-1">
          <p>Pranaya Vinjamoori,</p>
          <p>March 23</p>
        </div>
      </div>

      <div>
        <img
          src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg"
          alt="trutpilot"
          className="w-24"
        />
        <h3 className="text-sm font-bold py-2">Great platform to learn</h3>
        <p className="text-sm">
          Great platform to learn. Providing the learning environment makes this
          platform...
        </p>
        <div className="flex text-xs mt-1">
          <p>Pranaya Vinjamoori,</p>
          <p>March 23</p>
        </div>
      </div>

    </Carousel>
  );
};

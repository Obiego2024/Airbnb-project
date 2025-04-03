import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import myimg from "../../assets/signup-image.jpg";
import myimg2 from "../../assets/house1.jpg";
import myimg3 from "../../assets/house2.jpg";
import myimg4 from "../../assets/house3.jpg";
import myimg5 from "../../assets/house4.webp";
import myimg6 from "../../assets/facade-min-1536x1155.webp";
import myimg7 from "../../assets/blue-modern-home-400x300.jpg";
import Images from "../Images";

// Data for the carousel
const myList = [
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.0, image: myimg, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.0, image: myimg2, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.0, image: myimg3, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.0, image: myimg4, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.0, image: myimg5, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.0, image: myimg6, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.0, image: myimg7, date: "22–27 Oct · Individual Host" },
];

const CarouselComponent = ({ items }: { items: { location: string; description: string; price: string; rating: number; image: string; date: string }[] }) => {
  return (
    <div className="mx-4">
      <h1 className="text-center text-4xl text-red-400 font-bold capitalize my-6 animate-bounce">property for sale</h1>
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        showStatus={false}
        className="lg:w-200 lg:h-200 w-96 h-96"
      >
        {items.map((item, index) => (
          <div key={index} className="p-4">
            <img src={item.image} alt="Listing" className="rounded-lg" />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{item.location}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="text-sm text-gray-600">{item.date}</p>
              <p className="font-semibold mt-2">{item.price}</p>
              <p className="text-sm text-yellow-500">⭐ {item.rating}</p>
            </div>
          </div>
          
        ))}
      </Carousel>
     
     
    </div>
  );
};

function LoginHero() {
  return (
    <div>
      <div className="flex justify-center">
        {/* Single Carousel */}
        <CarouselComponent items={myList} />
      </div>
      <div>
        <Images />
      </div>
      <div className="mt-32">
      </div>
    </div>
  )
}

export default LoginHero
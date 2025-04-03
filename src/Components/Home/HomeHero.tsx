import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import myimg from "../../assets/Frame 6 (9).jpg";
import myimg2 from "../../assets/Frame 6 (10).jpg";
import myimg3 from "../../assets/Frame 6 (11).jpg";
import myimg4 from "../../assets/Frame 6 (12).jpg";
import myimg5 from "../../assets/Frame 6 (13).jpg";
import myimg6 from "../../assets/Frame 6 (14).jpg";
import myimg7 from "../../assets/Frame 6 (15).jpg";
import myimg8 from "../../assets/Frame 6 (2).jpg";
import myimg9 from "../../assets/Frame 6 (3).jpg";
import myimg10 from "../../assets/Frame 6 (4).jpg";

const myList1 = [
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.0, image: myimg, date: "22–27 Oct · Individual Host" },
  { location: "Malibu, California, US", description: "Luxury beachfront villa", price: "£2,500 total", rating: 4.8, image: myimg2, date: "15–20 Nov · Individual Host" },
  { location: "Aspen, Colorado, US", description: "Mountain retreat", price: "£1,200 total", rating: 4.9, image: myimg3, date: "10–15 Dec · Individual Host" },
];

const myList2 = [
  { location: "Santorini, Greece", description: "Cliffside views", price: "£3,000 total", rating: 5.0, image: myimg4, date: "5–10 Jan · Individual Host" },
  { location: "Bali, Indonesia", description: "Tropical paradise", price: "£1,800 total", rating: 4.7, image: myimg5, date: "20–25 Feb · Individual Host" },
  { location: "Tokyo, Japan", description: "Modern city apartment", price: "£900 total", rating: 4.6, image: myimg6, date: "1–6 Mar · Individual Host" },
];

const myList3 = [
  { location: "Paris, France", description: "Romantic getaway", price: "£2,200 total", rating: 4.9, image: myimg7, date: "10–15 Apr · Individual Host" },
  { location: "Sydney, Australia", description: "Harbor views", price: "£3,500 total", rating: 5.0, image: myimg8, date: "25–30 May · Individual Host" },
  { location: "Cape Town, South Africa", description: "Ocean and mountain views", price: "£1,700 total", rating: 4.8, image: myimg9, date: "5–10 Jun · Individual Host" },
  { location: "Rio de Janeiro, Brazil", description: "Beachfront apartment", price: "£2,300 total", rating: 4.7, image: myimg10, date: "15–20 Jul · Individual Host" },
];

const CarouselComponent = ({ items }: { items: { location: string; description: string; price: string; rating: number; image: string; date: string }[] }) => {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop
      autoPlay
      interval={3000}
      showStatus={false}
      className="rounded-lg shadow-lg"
    >
      {items.map((item, index) => (
        <div key={index} className="p-4">
          <img
            src={item.image}
            alt={`Listing in ${item.location}`}
            className="w-full h-64 object-cover rounded-lg"
          />
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
  );
};

function  HomeHero() {
  const [showCarousels, setShowCarousels] = useState(false);

  const handleShowMore = () => {
    setShowCarousels(true);
  };

  return (
    <div>
      <div className="mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Always visible carousels */}
        <CarouselComponent items={myList1} />
        <CarouselComponent items={myList2} />
        <CarouselComponent items={myList2} />
        <CarouselComponent items={myList2} />
        <CarouselComponent items={myList2} />
        <CarouselComponent items={myList2} />
        <CarouselComponent items={myList2} />
        <CarouselComponent items={myList2} />
        

        {/* Conditionally rendered carousels */}
        {showCarousels && (
          <>
            <CarouselComponent items={myList3} />
            <CarouselComponent items={myList3} />
            <CarouselComponent items={myList3} />
            <CarouselComponent items={myList3} />
            <CarouselComponent items={myList3} />
            <CarouselComponent items={myList3} />
            <CarouselComponent items={myList3} />
            <CarouselComponent items={myList3} />
            <CarouselComponent items={myList3} />
            <CarouselComponent items={myList3} />
            <CarouselComponent items={myList3} />
            <CarouselComponent items={myList3} />
          </>
        )}
      </div>

      {/* Show More Button */}
      {!showCarousels && (
        <div className="text-center mt-8">
          <button
            onClick={handleShowMore}
            className="text-xl capitalize text-center font-bold border bg-gray-950 text-gray-400 p-2 py-4 rounded-2xl hover:cursor-pointer hover:text-white"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  )
}

export default HomeHero

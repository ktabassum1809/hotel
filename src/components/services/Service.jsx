import React from "react";
import "./Service.css";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "../Title/Title";

function Service() {
 const  newServices = [
    {
      icon: <FaCocktail />,
      title: "Free Cocktails",
      info: "Enjoy complimentary cocktails as part of our premium hotel services, perfect for unwinding or celebrating in style. Let us elevate your stay with expertly crafted drinks on the house!",
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      info: "Experience endless hiking adventures with trails starting right from our hotel. Explore stunning landscapes and immerse yourself in nature at your own pace.",
    },
    {
      icon: <FaShuttleVan />,
      title: "Free Shuttle",
      info: "Enjoy the convenience of our complimentary shuttle service, making your travel stress-free and seamless. Whether heading to local attractions or the airport, we've got you covered!",
    },
    {
      icon: <FaBeer />,
      title: "Strongest Beer",
      info: "Indulge in the unique experience of savoring the strongest beer at our hotel. Crafted for connoisseurs, it’s a bold and unforgettable treat for beer enthusiasts.",
    },
  ];
  return (
    <section className="services">
      <Title title="services" />
     
      <div className="services-center">
        {newServices &&
          newServices.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
      </div>
    </section>
  );
}

export default Service;

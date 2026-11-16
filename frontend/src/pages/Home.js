import React from "react";
import "../styles/Home.css";
import FoodCart from "../components/FoodCart";

const Home = () => {
  const foodItems = [
    {
      id: 1,
      name: "Chicken Biryani",
      description: "Delicious spicy chicken biryani.",
      price: 220,
      image:
        "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600",
    },
    {
      id: 2,
      name: "Mutton Biryani",
      description: "Authentic flavorful mutton biryani.",
      price: 280,
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600",
    },
    {
      id: 3,
      name: "Veg Biryani",
      description: "Fresh vegetables with aromatic rice.",
      price: 160,
      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600",
    },
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Briyani House</h1>
          <h2>Experience the Taste of Authentic Biryani!</h2>
          <p>
            Delicious flavors, fresh ingredients, and unforgettable taste. Your
            favorite biryani is just one click away.
          </p>
          <button className="order-btn" type="button">
            Order Now
          </button>
        </div>
      </section>

      <section className="popular-items">
        <h2>Our special Briyani</h2>
        <div className="food-container">
            {foodItems.map((eachItem) => (
                <FoodCart foodItems={eachItem} key={eachItem.id}/>
            ))}
        </div>
      </section>

    </div>
  );
};
export default Home;

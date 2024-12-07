import "./App.css";

import Card from "./components/card";

import data from "../data/data.json";

import Cart from "./assets/cart.png";
import Revenue from "./assets/revenue.png";
import Dine from "./assets/dine.png";

const images = {
  "cart.png": Cart,
  "revenue.png": Revenue,
  "dine.png": Dine,
};

export default function App() {
  return (
    <div className="cards-container">
      {data.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          percentile={item.percentile}
          increase={item.increase}
          amount={item.amount}
          image={images[item.image]}
        />
      ))}
    </div>
  );
}

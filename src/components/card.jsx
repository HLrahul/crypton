import "./css/card.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

import data from "../../data/data.json";
import Cart from "../assets/cart.png";
import Dine from "../assets/dine.png";
import Revenue from "../assets/revenue.png";

const images = {
  "cart.png": Cart,
  "revenue.png": Revenue,
  "dine.png": Dine,
};

// eslint-disable-next-line react/prop-types
function Card({ title, percentile, increase, amount, image }) {
  return (
    <div className="card">
      <div className="card-header">
        <p className="card-header-title">{title}</p>
        <span>
          <FontAwesomeIcon
            className={increase ? "arrow-up" : "arrow-down"}
            icon={increase ? faArrowUp : faArrowDown}
            size="xs"
          />
          {increase ? (
            <p className="percentile-increase">{percentile}</p>
          ) : (
            <p className="percentile-decrease">{percentile}</p>
          )}
        </span>
      </div>
      <div className="card-content">
        <img src={image} alt={title} />
        <p id="metrics">{amount}</p>
      </div>
    </div>
  );
}

export default function CardsContainer() {
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

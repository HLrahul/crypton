import "./css/card.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
export default function Card({ title, percentile, increase, amount, image }) {
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

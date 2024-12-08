import "./css/landing_page.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBurger } from "@fortawesome/free-solid-svg-icons";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="container">
        <header className="header">
          <div className="logo">&#x25D7;</div>
          <div className="icons">
            <span className="search-icon">
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <span className="menu-icon">
              <FontAwesomeIcon icon={faBurger} />
            </span>
          </div>
        </header>
        <main className="main-content">
          <div className="tag">#Top</div>
          <h1 className="headline">
            A Responsibly As Teach Leading, Global Company
          </h1>
          <h2 className="subheadline">Creating Superior Products & Services</h2>
          <div className="trust-pilot">
            <span className="star-icon">
              <img
                src="https://th.bing.com/th/id/OIP.3pskPTXG33pNZ6XWgrQj5AAAAA?rs=1&pid=ImgDetMain"
                alt="star"
              />
            </span>
            <span className="trust-pilot-info">
              <p className="appreciations">Trust pilot</p>
              <span className="reviews">
                Rated Best <b>12.6K</b> Reviews
              </span>
            </span>
          </div>
          <div className="graphic">
            <img
              className="wave1"
              src="https://static.vecteezy.com/system/resources/previews/000/380/242/original/vector-wave-gradient-background.jpg"
              alt="wave"
            />
            <img
              className="wave2"
              src="https://img.freepik.com/premium-photo/abstract-background-images-wallpaper-ai-generated_643360-53228.jpg"
              alt="wave"
            />
          </div>
          <div className="buttons">
            <button className="signup-button">Signup to Get 50% OFF</button>
            <button className="explore-button">Explore New Products</button>
          </div>
        </main>
      </div>
    </div>
  );
}

import "./App.css";

import CardsContainer from "./components/card";
import LandingPage from "./components/landing_page";
import Transactions from "./components/transactions";

export default function App() {
  return (
    <div>
      <CardsContainer />
      <Transactions />
      <LandingPage />
    </div>
  );
}

import Feed from "./components/Feed";
import CurrencyConverter from "./components/CurrencyConverter";
import Ticker from "./components/Ticker";
import logo from "./logo.png";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="App">
        <img
          className="pointerEventsNone unselectable"
          alt="logo"
          style={{ padding: ".4em" }}
          src={logo}
        />

        <div className="header-padding main">
          <CurrencyConverter />
          <Feed />
          <Ticker />
        </div>
      </div>
      <Footer />
    </>
  );
}

import Feed from "./components/Feed";
import CurrencyConverter from "./components/CurrencyConverter";
import Ticker from "./components/Ticker";
import logo from "./logo.png";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="App">
        <img alt="logo" style={{ padding: ".4em" }} src={logo} />

        <div className="main">
          <CurrencyConverter />
          <Feed />
        </div>

        {/*<Ticker />*/}
      </div>
      <Footer />
    </>
  );
}

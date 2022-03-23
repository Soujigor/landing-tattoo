import "./App.css";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Guests from "./Components/Guests/Guests";
import Header from "./Components/Header/Header";

import Crew from "./Components/Main/Crew";
import Map from "./Components/Map/Map";

function App() {
  return (
    <>
      <Header />
      <About />
      <Crew />
      <Guests />
      <Map />
      <Footer />
    </>
  );
}

export default App;

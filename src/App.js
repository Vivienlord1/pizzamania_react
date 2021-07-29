
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Carousel from "./Components/Carousel/Carousel"
import AboutUs from "./Components/AboutUs/AboutUs"
import PizzaTypers from "./Components/PizzaTypes/PizzaTypes"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <AboutUs/>
      <PizzaTypers/>
      <Footer/>
    </div>
  );
}

export default App;

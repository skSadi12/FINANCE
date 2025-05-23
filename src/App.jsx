import { Feedback } from "@mui/icons-material";
import "./App.css";
import Box from "./components/Box";
import Debit from "./components/Debit";
import Hero from "./components/Hero";
import Navbarx from "./components/Navbar";
import Offer from "./components/Offer";
import Herox from "./components/PerfectCard";
import Feedbacks from "./components/Feedbacks";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbarx />
      <Hero/>
      <Box/>
      <Offer/>
      <Debit/>
      <Herox/>
      <Feedbacks/>
      <FAQ/>
      <Footer/>
    </>
  );
}

export default App;

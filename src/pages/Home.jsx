import Prices from "../components/Prices";
import Navbar from "../components/Navbar";
import Evaluation from "../components/Evaluation";
import Dashboard from "../components/Dashboard";
import Discord from "../components/Discord";
import Footer from "../components/Footer";
import Benefits from "../components/Benefits";
import Hero from "../components/Hero";
import FAQ from "../components/FAQ";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import TradingWdget from "../ui/TradingWdget";
import Compare from "../components/Compare";

export default function Home() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Hero />
      <TradingWdget />
      <Evaluation />
      <Benefits />
      <Compare />
      <Dashboard />
      <Prices />
      <Discord />
      <FAQ />
      <Footer />

      <div className="hidden h-0 w-0 opacity-0 left-0 visible md:invisible"></div>

      <script src="./js/script.js"></script>
    </>
  );
}

import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Super from "./component/Super";
import Earn from "./component/Earn";
import KAI from "./component/KAI";
import Liquidity from "./component/Liquidity";
import SpaceGuard from "./component/SpaceGuard";
import Roadmap from "./component/Roadmap";
import SmartContract from "./component/SmartContract";
import Sponsors from "./component/Sponsors";
import Patners from "./component/Patners";
import Updates from "./component/Updates";
import Community from "./component/Community";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Super />
      <Earn />
      <KAI />
      <Liquidity />
      <SpaceGuard />
      <Roadmap />
      <SmartContract />
      <Sponsors />
      <Patners />
      <Updates />
      <Community />
      <Footer />
    </>
  );
};

export default App;

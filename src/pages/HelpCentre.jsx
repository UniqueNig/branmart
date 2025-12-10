import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BuildBranmart from "../components/helpcentre/BuildBranmart";
import NeedHelp from "../components/helpcentre/NeedHelp";
import PopularArticle from "../components/helpcentre/PuparlarArticle";
import ExploreByTopic from "../components/helpcentre/ExploreByTopic";
import HelpHero from "../components/helpcentre/HelpHero";

const HelpCentre = () => {
  return (
    <>
      <Navbar />
      <HelpHero/>
      <ExploreByTopic/>
      <PopularArticle/>
      <NeedHelp/>
      <BuildBranmart/>
      <Footer />
    </>
  );
};

export default HelpCentre;

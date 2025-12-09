import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BuildBranmart from "../components/helpcentre/BuildBranmart";
import NeedHelp from "../components/helpcentre/NeedHelp";
import PopularArticle from "../components/helpcentre/PuparlarArticle";
import ExploreByTopic from "../components/helpcentre/ExploreByTopic";

const HelpCentre = () => {
  return (
    <>
      <Navbar />
      <ExploreByTopic/>
      <PopularArticle/>
      <NeedHelp/>
      <BuildBranmart/>
      <Footer />
    </>
  );
};

export default HelpCentre;

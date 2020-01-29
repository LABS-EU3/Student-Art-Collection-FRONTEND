import React from "react";

import Search from "../Components/SchoolComponents/Search";
import ArtContainer from "../Components/BrowseComponents/BrowseArtContainer";
import Footer from "../Components/LandingComponents/Footer";
import SchoolHero from "../Components/SchoolComponents/SchoolHero";
import SchoolContainer from "../Components/SchoolComponents/SchoolContainer";

export default function Schools() {
  return (
    <>
      <SchoolHero />
      <Search />
      <ArtContainer />
      <SchoolContainer />
      <Footer />
    </>
  );
}

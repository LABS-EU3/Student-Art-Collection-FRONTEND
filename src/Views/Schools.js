import React from 'react';

import SchoolHero from '../Components/SchoolComponents/SchoolHero';
import Search from '../Components/SchoolComponents/Search';
import SchoolContainer from '../Components/SchoolComponents/SchoolContainer';
import Footer from '../Components/LandingComponents/Footer';

export default function Schools() {
  return (
    <>
      <SchoolHero />
      {/* <Search /> */}
      <SchoolContainer />
      <Footer />
    </>
  );
}

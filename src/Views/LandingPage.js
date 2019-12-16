import React from 'react';
import Navbar from '../Components/NavBar';

// can be deleted when starting to build the app
import Counter from '../Components/Counter';

function LandingPage() {
  return (
    <>
      <Navbar />
      {/* Counter component is just to create redux files. Can be safely deleted when starting to build the app */}
      <Counter />
    </>
  );
}

export default LandingPage;

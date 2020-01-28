import React from "react";
import AlgoliaPlaces from "algolia-places-react";

export default () => {
  return (
    <AlgoliaPlaces
      placeholder="Write an address here"
      onChange={({ rawAnswer }) => console.log(rawAnswer)} 
      onSuggestions={({ rawAnswer }) => console.log(2, rawAnswer)} 
      options={{
        appId: "plE5TDMGUFLT",
        apiKey: "ec0b572cd3fd3c7b6b56b4db34563c5f",
        type: "address"
      }}
    />
  );
};

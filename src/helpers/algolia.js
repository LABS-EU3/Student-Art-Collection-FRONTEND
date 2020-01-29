import React from "react";
import AlgoliaPlaces from "algolia-places-react";


export default () => {
  return (
    <AlgoliaPlaces
      placeholder="Write an address here"
      onChange={({ suggestion }) =>
        localStorage.setItem(
          "address",
          JSON.stringify({
            name: suggestion.name,
            administrative: suggestion.administrative,
            country: suggestion.country,
            latitude: suggestion.latlng.lat,
            longitude: suggestion.latlng.lng,
            postCode: suggestion.postcode
          })
        )
      }
      options={{
        appId: process.env.REACT_APP_APP_ID,
        apiKey: process.env.REACT_APP_APP_KEY,
        type: "address"
      }}
    />
  );
};

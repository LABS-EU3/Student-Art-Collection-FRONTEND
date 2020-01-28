import React from "react";
import AlgoliaPlaces from "algolia-places-react";
require('dotenv').config()

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
        appId: process.env.APP_ID,
        apiKey: process.env.APP_KEY,
        type: "address"
      }}
    />
  );
};

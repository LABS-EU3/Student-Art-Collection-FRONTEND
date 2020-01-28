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
        appId: "plE5TDMGUFLT",
        apiKey: "ec0b572cd3fd3c7b6b56b4db34563c5f",
        type: "address"
      }}
    />
  );
};

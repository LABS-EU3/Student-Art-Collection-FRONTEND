import React from "react";
import AlgoliaPlaces from "algolia-places-react";

export default () => {
  return (
    <AlgoliaPlaces
      placeholder="Write an address here"
      onChange={({ suggestion }) => {
        const coordinates = localStorage.setItem(
          "coordinates",
          JSON.stringify({
            type: "Point",
            coordinates: [suggestion.latlng.lng, suggestion.latlng.lat]
          })
        );

        const address = localStorage.setItem(
          "address",
          JSON.stringify({
            name: suggestion.name,
            administrative: suggestion.administrative,
            country: suggestion.country,
            latitude: suggestion.latlng.lat,
            longitude: suggestion.latlng.lng,
            postCode: suggestion.postcode
          })
        );
        return address && coordinates;
      }}
      options={{
        appId: process.env.REACT_APP_APP_ID,
        apiKey: process.env.REACT_APP_APP_KEY,
        type: "address"
      }}
    />
  );
};

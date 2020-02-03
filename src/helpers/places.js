import places from 'places.js';

export default function LocationInput(props) {
    const placesAutocomplete = places({
        appId: process.env.REACT_APP_APP_ID,
        apiKey: process.env.REACT_APP_APP_KEY,
        container: document.querySelector('#address-input')
      });

      return (
          <input 
              name={props.name}
              value={props.value}
              onChange={props.changeHandler}
              id="address-input"
          />
      )
}
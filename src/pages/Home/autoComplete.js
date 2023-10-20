import React, { useState, useEffect } from "react";
import { Autocomplete } from "@react-google-maps/api";

const AutocompleteComponent = () => {
  const [autocomplete, setAutocomplete] = useState(null);
  const [input, setInput] = useState("");

  const handleLoad = (autocomplete) => {
    setAutocomplete(autocomplete);
  };

  const handlePlaceSelect = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      console.log(place);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    // Check if Google Maps API is loaded
    if (typeof window.google === "object" && typeof window.google.maps === "object") {
      // Google Maps API is loaded, you can now use the Autocomplete component
    } else {
      // Google Maps API is not loaded yet
      // You can add additional checks or set up a loading mechanism
      console.log("Google Maps API is not loaded.");
    }
  }, []);

  return (
    <div>
      <Autocomplete
        onLoad={handleLoad}
        onPlaceChanged={handlePlaceSelect}
        apiKey={process.env.REACT_APP_GOOGLE_API_KEY} // Access the API key from environment variables
      >
        <input
          type="text"
          placeholder="Enter a location"
          value={input}
          onChange={handleInputChange}
        />
      </Autocomplete>
    </div>
  );
};

export default AutocompleteComponent;

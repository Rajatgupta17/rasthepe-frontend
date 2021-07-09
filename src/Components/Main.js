import React , {Component, useState} from 'react';
import "../Styles/Main.css";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

function LocationSearchInput(props) {

    const [address,setAdress] = useState("")
    const [coordinates,setCoordinates]=useState({
        lat:null,
        lng:null
    })
    const handleSelect=async value=>{
        const results=await geocodeByAddress(value);
        const l1=await getLatLng(results[0]);
        console.log(l1);
        setAdress(value);
        setCoordinates(l1);
    }

        return (
            <PlacesAutocomplete
                value={address}
                onChange={setAdress}
                onSelect={handleSelect}

            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: props.placeholder,
                                className: 'location-search-input',
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#fbf6f6', cursor: 'pointer', color:'#2C445E' ,fontFamily:'Poppins', position:'relative',zIndex:9 }
                                    : { backgroundColor: '#fbf6f6', cursor: 'pointer',color:'#2C445E', fontFamily:'Poppins',position:'relative',zIndex:10};
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span className="dropDown">{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }

export default LocationSearchInput;
import React, { Component } from "react";
import { GoogleMap, LoadScript, StandaloneSearchBox, useGoogleMap, Marker } from '@react-google-maps/api';
import "./styles.css";
import Geocode from "react-geocode";

class Map extends Component {
    constructor(props) {
        super(props);
        Geocode.setApiKey("AIzaSyCvHYx39Zfk2YWp6lWWMxok6fDqtHiM1Pc");
        this.state = {
            searchBox: null,
            map: {},

        };
    }

    onLoad(search) {
        this.setState({ searchBox: search })
    }
    onLoadMap(map) {
        this.setState({ map: map })
    }
    onPlacesChanged() {
        const places = this.state.searchBox.getPlaces();
        const place = places[0];
        const location = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
        }
        const address = {
            address_occurrence: place.formatted_address,
            lat_occurrence: String(location.lat),
            lng_occurrence: String(location.lng),
        }
        this.props.onChange(address);
        this.setState({ map: location });
    }

    onGeoLocation(lat, lng) {
        Geocode
            .fromLatLng(lat, lng)
            .then((response) => {
                const address = response.results[0].formatted_address;
                const newAddress = {
                    address_occurrence: address,
                    lat_occurrence: String(lat),
                    lng_occurrence: String(lng),
                }
                this.props.onChange(newAddress);
            },
                (error) => {
                    console.error(error);
                }
            );
    }

    render() {
        return (
            <div>
                <LoadScript
                    googleMapsApiKey={"AIzaSyCB6sKMYgKpNuzYx1NXrajQjZezxpqryXE"}
                    libraries={["places", "geometry"]}
                >
                    <GoogleMap
                        onLoad={() => this.onLoadMap()}
                        yesIWantToUseGoogleMapApiInternals
                        mapContainerStyle={{
                            width: '850px',
                            height: "400px",
                            alignItems: 'center',
                            justifyContent: "center"
                        }}
                        center={this.state.map || {
                            lat: -9.6660417,
                            lng: -35.7352167
                        }}
                        zoom={15}
                    >

                        <div className="address">
                            <StandaloneSearchBox
                                onLoad={(e) => this.onLoad(e)}
                                onPlacesChanged={() => this.onPlacesChanged()}
                            >
                                <input
                                    className="addressField"
                                    placeholder="Digite uma rua..."
                                />
                            </StandaloneSearchBox>
                            <Marker
                                position={this.state.map}
                                draggable
                                onDragEnd={(coord, index) => {
                                    const { latLng } = coord;
                                    const lat = latLng.lat();
                                    const lng = latLng.lng();

                                    this.onGeoLocation(lat, lng)


                                    console.log(`Cords: ${lat} || ${lng}`)
                                    // console.log("places:", places)
                                }}
                            />
                        </div>
                    </GoogleMap>
                </LoadScript>
            </div>
        )
    }
}

export default Map;

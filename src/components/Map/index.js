import React, { Component } from "react";
import { GoogleMap, LoadScript, StandaloneSearchBox, useGoogleMap, Marker } from '@react-google-maps/api';
import "./styles.css";

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBox: null,
            map: {},

        };
    }
    onLoad(search) {
        console.log("search:", search)
        this.setState({ searchBox: search })
    }
    onLoadMap(map) {
        this.setState({ map: map })
    }
    onPlacesChanged() {
        const places = this.state.searchBox.getPlaces();
        console.log("places", places)
        const place = places[0];
        console.log("place", place)
        const location = {
            lat: place.geometry.location.lat() || 0,
            lng: place.geometry.location.lng() || 0,
        }
        console.log("location", location)
        this.setState({ map: location });
    }

    render() {
        return (
            <div>
                <LoadScript
                    googleMapsApiKey={"AIzaSyCB6sKMYgKpNuzYx1NXrajQjZezxpqryXE"}
                    libraries={["places"]}
                >
                    <GoogleMap
                        onLoad={() => this.onLoadMap()}
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

                                    console.log(`Cords: ${lat} || ${lng}`)
                                }}
                            // onDraggableChanged={(e) => console.log(e)}
                            // onClick={(e) => console.log(e)}
                            // onDrag={(e) => console.log(e.latLng)}
                            // onPositionChanged={(e) => console.log("position:", e)}
                            // options={{ 
                            //     label: {
                            //         text: "teste",
                            //         className: "Teste"
                            //     }
                            // }}
                            />
                        </div>
                    </GoogleMap>
                </LoadScript>
            </div>
        )
    }
}

export default Map;

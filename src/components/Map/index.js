import React, { Component } from 'react';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet'
import "./styles.css";
// import 'leaflet/dist/leaflet.css'

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="map">
                <LeafletMap
                    center={{
                        lat: -15.779722222222,
                        lng: -47.929722222222,
                    }}
                    zoom={3}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {/* <Marker position={this.props.position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker> */}
                </LeafletMap>
            </div>
        );
    }
}

export default Map;

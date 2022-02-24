//Libraries
import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import LoadingOverlay from 'react-loading-overlay';
//Components
//Services
import { api } from "../../services/api";
//Styles
import './styles.css'


class HeatMap extends Component {
    static defaultProps = {
        center: {
            lat: -9.6660417,
            lng: -35.7352167
        },
        zoom: 14
    }

    constructor(props) {
        super(props)
        this.state = {
            heatmapVisible: true,
            heatmapPoints: [],
            loading: false
        }
    }

    async handleGetPositions() {
        this.setState({ loading: true })
        try {
            const { data } = await api.get("/locations/occurrences")
            let newArray = data.occurrences.map((item) => (
                {
                    lat: item.lat_occurrence,
                    lng: item.lng_occurrence
                }
            ))
            console.log("new:", newArray)
            this.setState({
                heatmapPoints: newArray
            })
            this.setState({ loading: false })
        } catch (error) { }
    }

    componentDidMount() {
        this.handleGetPositions()
    }

    render() {
        const apiKey = { key: 'AIzaSyB30ANnmngcT67sprBdpq2UphR3y5zat-o' }
        const heatMapData = {
            positions: this.state.heatmapPoints,
            options: {
                radius: 20,
                opacity: 0.6
            }
        }
        return (
            <LoadingOverlay
                active={this.state.loading}
                spinner
                text='Carregando dados...'
            >
                <div style={{ height: '100vh', width: '100%' }}>
                    {this.state.loading ?
                        <></>
                        :
                        <GoogleMapReact
                            ref={(el) => this._googleMap = el}
                            bootstrapURLKeys={apiKey}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                            heatmapLibrary={true}
                            heatmap={heatMapData}
                        />
                    }
                </div>
            </LoadingOverlay>
        )
    }
}

export default HeatMap
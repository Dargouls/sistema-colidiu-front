import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { api } from "../../services/api";
import './styles.css'

class HeatMap extends Component {
    static defaultProps = {
        center: {
            lat: -9.6660417,
            lng: -35.7352167
        },
        zoom: 12
    }

    constructor(props) {
        super(props)
        this.state = {
            heatmapVisible: true,
            heatmapPoints: [
                {lat: '-9.6660417', lng: '-35.7352167'},
                {lat: '-9.661096299999999', lng: '-35.6973906'},
                {lat: '-9.6660417', lng: '-35.7352167'}
            ],
        }
    }

    async handleGetPositions() {
        this.setState({ loading: true })
        try {
            const { data } = await api.get("/locations/occurrences")
            // toast.success("Lista de ocorrências carregadas com sucesso!")
            console.log("New points:", data.occurrences)

            let newArray = data.occurrences.map((item) => {
                if ((item.lng_occurrence !== "" && item.lng_occurrence !== "undefined") || (item.lat_occurrence !== "" && item.lat_occurrence !== "undefined")) {
                    return { lat: item?.lat_occurrence, lng: item?.lng_occurrence }
                }
                // return null;
            })

            console.log("new:", newArray)
            // this.setState({
            //     heatmapPoints: [...this.state.heatmapPoints, {
            //         lat: -9.6660417,
            //         lng: -35.7352167
            //     }]
            // })

            // 

            // this.filterOcccurences(this.state.selectOccurence, data.occurrences)
            // this.setState({ occurrences: data.occurrences })
            // this.setState({ loading: true })
        } catch (error) {
            // toast.error('Ocorreu algum erro, por favor tente novamente mais tarde!')
            // this.setState({ loading: true })
        }
    }

    componentDidMount() {
        this.handleGetPositions()
    }

    render() {
        const apiKey = { key: 'AIzaSyB30ANnmngcT67sprBdpq2UphR3y5zat-o' }
        const heatMapData = {
            positions: this.state.heatmapPoints || [],
            options: {
                radius: 20,
                opacity: 0.6
            }
        }

        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    ref={(el) => this._googleMap = el}
                    bootstrapURLKeys={apiKey}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    heatmapLibrary={true}
                    heatmap={heatMapData}
                >
                </GoogleMapReact>
            </div>
        )
    }
}

export default HeatMap
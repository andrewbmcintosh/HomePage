import React, { Component } from 'react'

export default class PingButton extends Component {
    state = {
        placesData: [{}]
    }

    componentDidMount() {
        this.addPlacesDataToState()
    }


    addPlacesDataToState = () => {
        this.setState({ placesData: this.props.placesData })
    }

    pingLocation = (props) => {
        const prevLocation = this.props.placesData.filter(places =>
            (places.southwestLat < this.props.currentLocation.lat &&
                places.northeastLat > this.props.currentLocation.lat &&
                places.southwestLng < this.props.currentLocation.lng &&
                places.northeastLng > this.props.currentLocation.lng));


        console.log(prevLocation)
    }








    render() {
        return (
            <div>
                <button onClick={this.pingLocation}>Im the Ping Button</button>
            </div>
        )
    }
}


import React, { Component } from 'react'

export default class PingButton extends Component {

    pingLocation = (props) => {

        // currentLocation = {this.props.currentLocation}
        // placesData= [this.props.placesData]
        const prevLocation = this.props.placesData.filter(places =>
            (this.props.placesData.southwestLat < this.props.currentLocation.lat &&
                this.props.placesData.northeastLat > this.props.currentLocation.lat &&
                this.props.placesData.southwestLng < this.props.currentLocation.lng &&
                this.props.placesData.northeastLng > this.props.currentLocation.lng))
        console.log(prevLocation)
        console.log(this.props.placesData)
        console.log(this.props.placesData.southwestLng)
    }

    // I should create another then and then a catch that triggers the API and add to database







    render() {
        return (
            <div>
                <button onClick={this.pingLocation}>Im the Ping Button</button>
            </div>
        )
    }
}


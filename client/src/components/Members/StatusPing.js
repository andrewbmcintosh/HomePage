import React, { Component } from 'react'
import axios from 'axios'

export default class StatusPing extends Component {
    state = {
        currentLocation: {
            lat: "",
            lng: ""
        }
    }

    pingLocation = () => {
        navigator.geolocation.getCurrentPosition((pos) => {
            const coords = pos.coords;
            console.log(coords)
            this.setState({
                currentLocation: {
                    lat: coords.latitude,
                    lng: coords.longitude
                }
            })
        })
    }

    sendLocationToPlaces = () => {
        axios.post(`https://maps.googleapis.com/maps/api/geocode/json?latlng=33.773188399999995,-84.3653952&key=${process.env.REACT_APP_PLACES_API_KEY}`)
            .then((res) => {
                console.log(res.data)
            })
    }


    render() {
        return (
            <div>
                <button onClick={this.pingLocation}>Ping {this.props.memberId}'s Location</button>
                <button onClick={this.sendLocationToPlaces}>Test for API</button>


            </div>
        )
    }
}

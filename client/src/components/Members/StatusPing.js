import React, { Component } from 'react'

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

    }

    
    render() {
        return (
            <div>
                            {/* {console.log(process.env.REACT_APP_PLACES_API_KEY)} */}
                <button onClick={this.pingLocation}>Ping {this.props.memberId}'s Location</button>
            </div>
        )
    }
}

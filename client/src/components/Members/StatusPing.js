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

    render() {
        return (
            <div>
                <button onClick={this.pingLocation}>Ping {this.props.memberId}'s Location</button>
            </div>
        )
    }
}

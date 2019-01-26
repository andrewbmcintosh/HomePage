import React, { Component } from 'react'
require('dotenv').config()
const API_KEY = `${process.env.PLACES_API_KEY}`
console.log(API_KEY)
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
            console.log(API_KEY)
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

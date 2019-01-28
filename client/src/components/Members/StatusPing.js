import React, { Component } from 'react'
import axios from 'axios'

export default class StatusPing extends Component {
    state = {
        currentLocation: {
            lat: "",
            lng: ""
        },
        newPlaceData: {
            placeId:"",
            northeastLat: "",
            northeastLng: "",
            southwestLat: "",
            southwestLng: ""

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
    // need to create a place in pingLocation to add the axios calls. Also need to submit this to my database. itterate through the object
    // and post that to my database. that will also take ginnys param and add it to her place in the database
    sendLocationToPlaces = () => {
        axios.post(`https://maps.googleapis.com/maps/api/geocode/json?latlng=33.7723551,-84.36655499999999&key=${process.env.REACT_APP_GEOCODE_API_KEY}`)
            .then(res => {
                console.log(res.data)
                const newPlaceData = [res.data]
                console.log(newPlaceData)
                // console.log(newPlaceData[0].results)
                // bellow is the place id
                // console.log(newPlaceData[0].results[0].place_id)
                // var for northeast lat
                // console.log(newPlaceData[0].results[0].geometry.bounds.northeast.lat)
                // var for northeast long

                // var for southwest lat
                // var for southwest long
                console.log(newPlaceData[0].results[0].geometry.bounds.northeast.lng)
                this.setState({
                    newPlaceData: {
                        placeId:newPlaceData[0].results[0].place_id,
                        northeastLat: newPlaceData[0].results[0].geometry.bounds.northeast.lat,
                        northeastLng: newPlaceData[0].results[0].geometry.bounds.northeast.lng,
                        southwestLat: newPlaceData[0].results[0].geometry.bounds.southwest.lat,
                        southwestLng: newPlaceData[0].results[0].geometry.bounds.southwest.lng            
                    }
                })

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

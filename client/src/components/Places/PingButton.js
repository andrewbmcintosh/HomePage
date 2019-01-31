import React, { Component } from 'react'
import axios from 'axios'

export default class PingButton extends Component {
    state = {
        placesData: [{}],
        newPlaceData: {
            placeId:"",
            northeastLat:"",
            northeastLng:"",
            southwestLat:"",
            southwestLng:""
        }
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

        if (prevLocation.length > 0) {
            // add the function to post that previous location stuff to the state

            console.log("You've been here before!")
        }
        if (prevLocation.length == 0){
            console.log("Welcome to a new place!")
            axios.post(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.props.currentLocation.lat},${this.props.currentLocation.lng}&key=${process.env.REACT_APP_GEOCODE_API_KEY}`)
            .then(res => {
                console.log(res.data)
                const newPlaceData = [res.data]
                console.log(newPlaceData)
                console.log(newPlaceData[0].results[0].geometry.bounds.northeast.lng)
                this.setState({
                    newPlaceData: {
                        placeId: newPlaceData[0].results[0].place_id,
                        northeastLat: newPlaceData[0].results[0].geometry.bounds.northeast.lat,
                        northeastLng: newPlaceData[0].results[0].geometry.bounds.northeast.lng,
                        southwestLat: newPlaceData[0].results[0].geometry.bounds.southwest.lat,
                        southwestLng: newPlaceData[0].results[0].geometry.bounds.southwest.lng
                    }
                })

            })
        }
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


import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import PingButton from '../Places/PingButton';

const Wrapper = styled.section`
    height: 200px;
    width: 200px;
  padding: 4em;
  margin: 20px;
  background: papayawhip;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: flex;
    flex-direction: column;
    justify-content: space-around;
`;


export default class StatusPing extends Component {

    state = {
        currentLocation: {
            lat: "",
            lng: ""
        },
        newPlaceData: {
            placeId: "",
            northeastLat: "",
            northeastLng: "",
            southwestLat: "",
            southwestLng: ""

        },
        placesData: [{}],
        pingButtonVisible: false
    }

    togglePingButton = () => {
        this.setState({ pingButtonVisible: !this.state.pingButtonVisible })
    }

    // componentDidMount() {
    //     const memberId = this.props.memberId
    //     axios.get(`/api/members/${memberId}/places`)
    //         .then((res) => this.setState({ placesData: res.data })
    //         ) 
    //         console.log('DidMount Data')
    // }


    // placesDataOnMount = () => {
    //     const memberId = this.props.memberId
    //     axios.get(`/api/members/${memberId}/places`)
    //         .then((res) => this.setState({ placesData: res.data })
    //         )
    // }

    // do i need to add component did mount to retrieve places data from beggining?
    // then when they click it then gets the location and itterates through
    initialPingClick = () => {
        // navigator.geolocation.getCurrentPosition((pos) => {
        //     const coords = pos.coords;
        //     console.log(coords)
        //     this.setState({
        //         currentLocation: {
        //             lat: coords.latitude,
        //             lng: coords.longitude
        //         }
        //     })
        //     // currently working but i can forsee running into life cycle issues.
        //     // this will be solved when i attach the function above to the onclick event of the user
        //     // then the function below is called on the click of the "ping button"
        // })

        // const memberId = this.props.memberId
        // axios.get(`/api/members/${memberId}/places`)
        //     .then((res) => this.setState({ placesData: res.data }))

        //     .then(

        navigator.geolocation.getCurrentPosition((pos) => {
            const coords = pos.coords;
            console.log(coords)
            this.setState({
                currentLocation: {
                    lat: coords.latitude,
                    lng: coords.longitude
                }
            })
        }
        );
        // )
        const memberId = this.props.memberId
        axios.get(`/api/members/${memberId}/places`)
            .then((res) => this.setState({ placesData: res.data }))
    }



    pingLocation = () => {
        const memberId = this.props.memberId
        axios.get(`/api/members/${memberId}/places`)
            .then((res) => this.setState({ placesData: res.data })).then(
                navigator.geolocation.getCurrentPosition((pos) => {
                    const coords = pos.coords;
                    console.log(coords)
                    this.setState({
                        currentLocation: {
                            lat: coords.latitude,
                            lng: coords.longitude
                        }
                    })
                    // currently working but i can forsee running into life cycle issues.
                    // this will be solved when i attach the function above to the onclick event of the user
                    // then the function below is called on the click of the "ping button"
                })).then((err) => {
                    const prevLocation = this.state.placesData.filter(places =>
                        (places.southwestLat < this.state.currentLocation.lat &&
                            places.northeastLat > this.state.currentLocation.lat &&
                            places.southwestLng < this.state.currentLocation.lng &&
                            places.northeastLng > this.state.currentLocation.lng))
                    console.log(prevLocation)
                })

        // I should create another then and then a catch that triggers the API and add to database
    }
    // am i able to get that data on did mount? so that i dont
    // run into lifecycle issues

    // need to create a place in pingLocation to add the axios calls. Also need to submit this to my database. itterate through the object
    // and post that to my database. that will also take ginnys param and add it to her place in the database

    sendLocationToPlaces = () => {
        // axios.post(`https://maps.googleapis.com/maps/api/geocode/json?latlng=33.7723551,-84.36655499999999&key=${process.env.REACT_APP_GEOCODE_API_KEY}`)
        axios.post(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.currentLocation.lat},${this.state.currentLocation.lng}&key=${process.env.REACT_APP_GEOCODE_API_KEY}`)
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
                        placeId: newPlaceData[0].results[0].place_id,
                        northeastLat: newPlaceData[0].results[0].geometry.bounds.northeast.lat,
                        northeastLng: newPlaceData[0].results[0].geometry.bounds.northeast.lng,
                        southwestLat: newPlaceData[0].results[0].geometry.bounds.southwest.lat,
                        southwestLng: newPlaceData[0].results[0].geometry.bounds.southwest.lng
                    }
                })

            })
    }

    createNewPlace = () => {
        const payload = this.state.newPlaceData
        const memberId = this.props.memberId
        axios.post(`/api/members/${memberId}/places`, payload).then(() => {
            console.log(payload)
        })
    }
    // if i put a call back function in the above application it can somehow be affected by clicking on the user

    render() {
        return (
            <div>
                <div>
                    <Wrapper onClick={this.initialPingClick} >
                        <div>{this.props.memberName}'s status ping</div>
                        <button onClick={this.pingLocation}>Ping {this.props.memberId}'s Location</button>
                        <button onClick={this.sendLocationToPlaces}>Test for API</button>
                        <div><button onClick={this.createNewPlace}>Send newPlaceData to DB</button></div>
                    </Wrapper>
                    <div>
                    {this.state.pingButtonVisible ? <PingButton
                    // getAllUsers={this.getAllUsers}
                    // toggleAddUserForm={this.toggleAddUserForm}
                    /> : null}
                    </div>
                </div>

            </div>

        )
    }
}

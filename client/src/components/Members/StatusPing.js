import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import PingButton from '../Places/PingButton';
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import CircularProgress from '@material-ui/core/CircularProgress';
import CircularIndeterminate from '../Places/CircularIndeterminate';


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.primary.main,
        backgroundSize: 'cover',
        backgroundPosition: '0 400px',
        display: 'flex',
    },
    avatar: {
        margin: 10,
    },
    statusPingClass: {
        width: '70px',
        height: '155px',
        margin: '20px',
    }
});


class StatusPing extends Component {
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
        pingButtonVisible: false,
        loadingPingVisible: false
    }

    // need to change below to loading ping visible

    // togglePingButton = () => {
    //     this.setState({ pingButtonVisible: !this.state.pingButtonVisible })
    // }

    initialPingClick = () => {
        this.setState({
            loadingPingVisible: !this.state.loadingPingVisible
        })
        navigator.geolocation.getCurrentPosition((pos) => {
            const coords = pos.coords;
            console.log(coords)
            this.setState({
                currentLocation: {
                    lat: coords.latitude,
                    lng: coords.longitude
                },
                loadingPingVisible: !this.state.loadingPingVisible,
                pingButtonVisible: !this.state.pingButtonVisible
            })
        }
        );
        const memberId = this.props.memberId
        axios.get(`/api/members/${memberId}/places`)
            .then((res) => this.setState({
                placesData: res.data,
                // pingButtonVisible: !this.state.pingButtonVisible
            }))
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
        const API_KEY = process.env.REACT_APP_GEOCODE_API_KEY
        axios.post(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.currentLocation.lat},${this.state.currentLocation.lng}&key=${API_KEY}`)
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
    // I need to create functions in the Ping Button Component and pass props down to it 
    createNewPlace = () => {
        const payload = this.state.newPlaceData
        const memberId = this.props.memberId
        axios.post(`/api/members/${memberId}/places`, payload).then(() => {
            console.log(payload)
        })
    }
    // if i put a call back function in the above application it can somehow be affected by clicking on the user

    render() {
        const { classes } = this.props;
        return (

            <div>
                <Paper onClick={this.initialPingClick} className={classes.statusPingClass}>
                    <Grid container direction="column" justify="center" alignItems="center" justify="space-between">
                        <Grid item>
                            <Avatar className={classes.avatar}>
                                <FolderIcon />
                            </Avatar>
                        </Grid>
                        <Grid item>
                            <Typography>
                                {this.props.memberName}
                            </Typography>
                        </Grid>
                        <Divider variant="middle" />
                        <Grid item>
                            <Typography>
                                {this.props.membersCurrentStatus}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>




                <div>
                    {this.state.pingButtonVisible ? <PingButton
                        memberId={this.props.memberId}
                        currentLocation={this.state.currentLocation}
                        placesData={this.state.placesData}

                    /> : null}
                    {this.state.loadingPingVisible ? <CircularIndeterminate
                    /> : null}
                </div>
            </div >



        );
    }
}
export default withStyles(styles)(StatusPing)
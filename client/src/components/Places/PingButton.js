import React, { Component } from 'react'
import axios from 'axios'
import NewPlaceSlideForm from './NewPlaceSlideForm';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add';
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';



const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    paper: {
        zIndex: 1,
        position: 'relative',
        margin: theme.spacing.unit,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -65,
        left: 0,
        right: 0,
        margin: '0 auto',
    },

    toolbar: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
class PingButton extends Component {
    state = {
        placesData: [{}],
        newPlaceData: {
            placeId: "",
            northeastLat: "",
            northeastLng: "",
            southwestLat: "",
            southwestLng: ""
        },
        newPlaceObjectId: "",
        // changed to true to work on form
        newPlaceSlideFormVisible: false
    }

    componentDidMount() {
        this.addPlacesDataToState()
    }




    addPlacesDataToState = () => {
        this.setState({ placesData: this.props.placesData })
    }


    toggleNewPlaceSlideForm = () => {
        this.setState({})
    }

    pingLocation = (props) => {
        const prevLocation = this.props.placesData.filter(places =>
            (places.southwestLat < this.props.currentLocation.lat &&
                places.northeastLat > this.props.currentLocation.lat &&
                places.southwestLng < this.props.currentLocation.lng &&
                places.northeastLng > this.props.currentLocation.lng));

        if (prevLocation.length > 0) {
            console.log(prevLocation)
            // add the function to post that previous location stuff to the state

            console.log("You've been here before!")
        }
        if (prevLocation.length === 0) {
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
                }).then(() => {
                    const payload = this.state.newPlaceData
                    const memberId = this.props.memberId
                    axios.post(`/api/members/${memberId}/places`, payload).then((res) => {
                        console.log(payload)
                        console.log(res.data)
                        this.setState({
                            newPlaceObjectId: res.data._id,
                            newPlaceSlideFormVisible: !this.state.newPlaceSlideFormVisible
                        })
                    })
                }
                )
        }
        console.log(prevLocation)
    }

    // the EDIT OF CRUD WILL BE A POST TO THE DATABASE with the status of the place just found
    // need to make a toggle form that slides over




    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar position="fixed" color="default" className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <Fab color="secondary" aria-label="Add" className={classes.fabButton} onClick={this.pingLocation}>
                            <AddIcon />
                        </Fab>
                    </Toolbar>
                </AppBar>
                <div>
                    {/* i could have a hacky edit where i dont post to axios until after i pass to 
                NewPlaceSlideForm */}
                    <Slide direction="left" in={this.state.newPlaceSlideFormVisible} mountOnEnter unmountOnExit>
                        <Paper elevation={4}>

                            {this.state.newPlaceSlideFormVisible ? <NewPlaceSlideForm
                                memberId={this.props.memberId}
                                newPlaceDataObjectId={this.state.newPlaceObjectId}
                                currentLocation={this.state.currentLocation}
                                placesData={this.state.placesData}

                            /> : null}


                        </Paper>
                    </Slide>


                </div>

            </div>


        );
    }
}

export default withStyles(styles)(PingButton)

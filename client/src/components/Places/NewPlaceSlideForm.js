import React, { Component } from 'react'
import axios from 'axios';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default class NewPlaceSlideForm extends Component {

    state = {
        placeData: {
            statusType: "",
        },
        memberData: {
            currentStatus: "",
        }
    }

    addStatusTypeToNewPlaceData = () => {
        const payloadA = this.state.placeData
        const payloadB = this.state.memberData



        console.log(payloadA)
        const memberId = this.props.memberId
        const placeObjectId = this.props.newPlaceDataObjectId
        axios.patch(`/api/members/${memberId}/places/${placeObjectId}`, payloadA)
        console.log("Clicked")
        axios.patch(`/api/members/${memberId}`, payloadB)
        console.log("Clicked")
        window.location.reload();


    }
    deleteNewPlace = () => {
        const memberId = this.props.memberId
        const placeObjectId = this.props.newPlaceDataObjectId
        axios.delete(`/api/members/${memberId}/places/${placeObjectId}`)
        console.log("Clicked")
        // axios.patch(`/api/members/${memberId}/places/${placeObjectId}`, payloadB)
        // console.log("Clicked")

    }
    handleChangeSchool = event => {
        this.setState({ placeData: { statusType: 'school' } });
        this.setState({ memberData: { currentStatus: 'school' } });

    };
    handleChangeWork = event => {
        this.setState({ statusType: 'work' });
        // this.setState({ member: { currentStatus: 'work' } });

    };
    handleChangeHome = event => {
        this.setState({ statusType: 'home' });
        // this.setState({ member: { currentStatus: 'Home' } });

    };
    handleChangeActivity = event => {
        this.setState({ statusType: 'activity' });
        // this.setState({ member: { currentStatus: 'activity' } });

    };
    handleChangeHoliday = event => {
        this.setState({ statusType: 'holiday' });
        // this.setState({ member: { currentStatus: 'Holiday' } });

    };
    handleChangeErrands = event => {
        this.setState({ statusType: 'errands' });
        // this.setState({ member: { currentStatus: 'Errands' } });

    };

    render() {
        return (
            <div>
                <p>Step 1) assign your current location a status type by clicking one of the six buttons below</p>
                <button onClick={this.handleChangeSchool}>Set current location's status to School</button>
                <button onClick={this.handleChangeWork}>Set current location's status to Work</button>
                <button onClick={this.handleChangeHome}>Set current location's status to Home</button>
                <button onClick={this.handleChangeActivity}>Set current location's status to Activity</button>
                <button onClick={this.handleChangeHoliday}>Set current location's status to Holiday</button>
                <button onClick={this.handleChangeErrands}>Set current location's status to Errands</button>
                <p> Step 2) Save it to your places by clicking the button below</p>
                <button onClick={this.addStatusTypeToNewPlaceData}>Send Status To Object Just Created</button>
                <button onClick={this.deleteNewPlace}>Delete Current Location</button>


            </div>
        )
    }
}

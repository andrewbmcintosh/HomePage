import React, { Component } from 'react';
import axios from 'axios';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default class NewPlaceSlideForm extends Component {
  state = {
    placeData: {
      statusType: ''
    },
    memberData: {
      currentStatus: ''
    }
  };

  addStatusTypeToNewPlaceData = () => {
    const payloadA = this.state.placeData;
    const payloadB = this.state.memberData;

    console.log(payloadA);
    const memberId = this.props.memberId;
    const placeObjectId = this.props.newPlaceDataObjectId;
    axios.patch(`/api/members/${memberId}/places/${placeObjectId}`, payloadA);
    console.log('Clicked');
    axios.patch(`/api/members/${memberId}`, payloadB);
    console.log('Clicked');
    window.location.reload();
  };
  deleteNewPlace = () => {
    const memberId = this.props.memberId;
    const placeObjectId = this.props.newPlaceDataObjectId;
    axios.delete(`/api/members/${memberId}/places/${placeObjectId}`);
    console.log('Clicked');
    // axios.patch(`/api/members/${memberId}/places/${placeObjectId}`, payloadB)
    // console.log("Clicked")
  };
  handleChangeSchool = event => {
    this.setState({ placeData: { statusType: 'school' } });
    this.setState({ memberData: { currentStatus: 'school' } });
  };
  handleChangeWork = event => {
    this.setState({ placeData: { statusType: 'work' } });
    this.setState({ memberData: { currentStatus: 'work' } });
  };
  handleChangeHome = event => {
    this.setState({ placeData: { statusType: 'home' } });
    this.setState({ memberData: { currentStatus: 'home' } });
  };
  handleChangeActivity = event => {
    this.setState({ placeData: { statusType: 'activity' } });
    this.setState({ memberData: { currentStatus: 'activity' } });
  };
  handleChangeHoliday = event => {
    this.setState({ placeData: { statusType: 'holiday' } });
    this.setState({ memberData: { currentStatus: 'holiday' } });
  };
  handleChangeErrands = event => {
    this.setState({ placeData: { statusType: 'errands' } });
    this.setState({ memberData: { currentStatus: 'errands' } });
  };

  render() {
    return (
      <div>
        <p>
          Step 1) assign your current location a status type by clicking one of
          the six buttons below
        </p>
        <button onClick={this.handleChangeSchool}>
          Set current location's status to School
        </button>
        <button onClick={this.handleChangeWork}>
          Set current location's status to Work
        </button>
        <button onClick={this.handleChangeHome}>
          Set current location's status to Home
        </button>
        <button onClick={this.handleChangeActivity}>
          Set current location's status to Activity
        </button>
        <button onClick={this.handleChangeHoliday}>
          Set current location's status to Holiday
        </button>
        <button onClick={this.handleChangeErrands}>
          Set current location's status to Errands
        </button>
        <p> Step 2) Save it to your places by clicking the button below</p>
        <button onClick={this.addStatusTypeToNewPlaceData}>
          Send Status To Object Just Created
        </button>
        <button onClick={this.deleteNewPlace}>Delete Current Location</button>
      </div>
    );
  }
}

import React, { Component } from 'react'
import axios from 'axios';

export default class NewPlaceSlideForm extends Component {

    state = {
        statusType: "Work"
    }

    addStatusTypeToNewPlaceData = () => {
        const payload = this.state
        console.log(payload)
        const memberId = this.props.memberId
        const placeObjectId = this.props.newPlaceDataObjectId
        axios.patch(`/api/members/${memberId}/places/${placeObjectId}`, payload)
        console.log("Clicked")

    }


    render() {
        return (
            <div>
                <p>Im the New Place Slide Form</p>
                <button onClick={this.addStatusTypeToNewPlaceData}>Send Status To Object Just Created</button>
            </div>
        )
    }
}

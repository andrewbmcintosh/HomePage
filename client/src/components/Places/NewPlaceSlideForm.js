import React, { Component } from 'react'
import Axios from 'axios';

export default class NewPlaceSlideForm extends Component {

    state = {
        statusType: ""
    }

    // addStatusTypeToNewPlaceData = () => {
    //     const payload = this.state.statusType
    //     const memberId= this.props.memberId
    //     const placeObjectId= this.props.newPlaceDataObjectId
    //     Axios.post(`/api/members/${memberId}/places/:placeId`, payload)
    // }


    render() {
        return (
            <div>
                <p>Im the New Place Slide Form</p>
            </div>
        )
    }
}

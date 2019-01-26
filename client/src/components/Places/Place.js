import React, { Component } from 'react'
import axios from 'axios'

export default class Place extends Component {
    state = {
        place: {
            name: '',
            address: '',
            longitude: ``,
            latitude: ``,
            bias: '',
            statusType: ''
        }
    }

    handleChange = (event, placeId) => {
        console.log(placeId)
        this.props.member.places.forEach((place) => {
            if(placeId === place._id) {
                // this.setState({place: place})
                updatedState[event.target.name] = event.target.value
            }
        })
        // need to have a button that finds the location
        const updatedState = { ...this.state.place }
        this.setState({ place: updatedState })
    }

    // handleSubmit = (event, placeId) => {
    //     event.preventDefault()
    //     // use the term payload as well
    //     const payload = this.state.place
    //     axios.patch(`/api/places/${placeId}`, payload)
    //     // make sure passed down getSingleMember from SingleMember
    //     .then(() => this.props.getSingleMember)
    // }



  render() {
    return (
        <div>
        {this.props.member.places.map((idea, i) => (
       
                {/* <div onBlur={(event) => this.handleSubmit(event, idea._id)} key={i}>
                    <button onClick={(event)=> this.deleteIdea(event, idea._id)}>x</button>
                    <div><input onChange={(event)=> this.handleChange(event, idea._id)} type="text" name="title" value={idea.title}></input></div>
                    <div><textarea onChange={(event)=> this.handleChange(event, idea._id)} type="text" name="description" value={idea.description}></textarea></div>
                </div> */}
            ))}        
            </div>
    )
  }
}

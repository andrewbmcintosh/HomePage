import React, { Component } from 'react'
import axios from 'axios'
import StatusPing from './StatusPing';
import SingleMember from './SingleMember';
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';

// import styled from 'styled-components'
// import { useState, useEffect } from 'react';
// should i pass down places or let the status ping populate places?
// maybe i should create a new component that is not necessarily single member show
// but is still single member
// I think i will let each status ping populate so that the state here does not get too

const styles = theme => ({
    fab: {
      color: 'black',
    },
  });

export default class MemberList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [{}],
        }
    }
    

    componentDidMount() {
        this.getAllMembers()
    }


    getAllMembers = () => {
        axios.get(`/api/members`)
            .then((res) => this.setState({ members: res.data }))
    }


    render() {
        const { classes } = this.props
        return (
            <div>
                <div>
                    {this.state.members.map((member, i) => (
                        <div key={i}>
                            <ul>
                            </ul>
                            <StatusPing memberId={member._id} memberName={member.name} membersCurrentStatus={member.currentStatus}
                                memberTimeSincePing={member.timeSincePing}
                            />
                        </div>
                    ))}
                </div>
                <button>ORANGE BUTTON</button>
            </div>
            // i want to have a button that i will click on this screen and it will trigger the ping
            // in that persons StatusPing. it would be helpful to look at the user forms from in class
            // examples

        )
    }
}

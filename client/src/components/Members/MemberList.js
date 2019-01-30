import React, { Component } from 'react'
import axios from 'axios'
import StatusPing from './StatusPing';
import SingleMember from './SingleMember';
import styled from 'styled-components'

const StatusPingContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    
`
// should i pass down places or let the status ping populate places?
// maybe i should create a new component that is not necessarily single member show
// but is still single member
// I think i will let each status ping populate so that the state here does not get too


export default class MemberList extends Component {
    state = {
        members: [{}],
    }

    componentDidMount() {
        this.getAllMembers()
    }


    getAllMembers = () => {
        axios.get(`/api/members`)
            .then((res) => this.setState({ members: res.data }))
    }


    render() {
        return (
            <div>
                <StatusPingContainer>
                    {this.state.members.map((member, i) => (
                        <div key={i}>
                            <ul>
                            </ul>
                            <StatusPing memberId={member._id} memberName={member.name} memberCurrentStatus={member.currentStatus}
                                memberTimeSincePing={member.timeSincePing}
                            />
                        </div>
                    ))}
                </StatusPingContainer>
                <button>ORANGE BUTTON</button>
                </div>


        )
    }
}

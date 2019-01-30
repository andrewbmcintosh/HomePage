import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import StatusPing from './StatusPing';
import SingleMember from './SingleMember';

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
                {this.state.members.map((member, i) => (
                    <div key={i}>
                        <Link to={`/members/${member._id}`}><h3>{member.name}</h3></Link>
                        <ul>
                            <li>{member.places}</li>
                        </ul>
                        <StatusPing memberId={member._id} />
                    </div>
                ))}
            </div>
        )
    }
}

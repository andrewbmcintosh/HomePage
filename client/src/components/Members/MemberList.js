import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import StatusPing from './StatusPing';
import SingleMember from './SingleMember';





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
                        {/* <SingleMember memberId={member._id} /> */}
                        <StatusPing memberId={member._id} />
                    </div>
                ))}
            </div>
        )
    }
}

import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'





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
                    </div>
                ))}
            </div>
        )
    }
}

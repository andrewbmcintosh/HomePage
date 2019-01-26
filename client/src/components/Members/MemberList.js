import React, { Component } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'





export default class MemberList extends Component {
    state = {
        users: [{}],
    }
    getAllMembers = () => {
        axios.get(`/api/members`)
            .then((res) => this.setState({ users: res.data }))
    }


    render() {
        return (
            <div>
                <p>Hi from member list</p>
            </div>
        )
    }
}

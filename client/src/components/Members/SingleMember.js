import React, { Component } from 'react'
import axios from 'axios'


export default class SingleMember extends Component {
    state = {
        member: {}
    }

    componentDidMount() {
        this.getSingleMember()
    }

    getSingleMember = () => {
        const memberId = this.props.memberId
        console.log(memberId)
        axios.get(`/api/members/${memberId}`)
            .then((res) => {
                console.log(res.data)
                this.setState({ member: res.data })
            }).catch((err) => console.log(err))
    }

    render() {
        return (
            <div>
                <p>singleMemberPage</p>
                <p>{this.state.member.name}</p>

            </div>
        )
    }
}

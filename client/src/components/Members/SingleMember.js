// import React, { Component } from 'react'
// import axios from 'axios'
// import Place from '../Places/Place';

// export default class SingleMember extends Component {
//     state = {
//         member: {
//             places: [{}]
//         }
//     }

//     componentDidMount() {
//         this.getSingleMember()
//     }

//     getSingleMember = () => {
//         // after development i can pass down the memberID instead of using the match
//         // params in the url
//         const memberId = this.props.match.params.memberId
//         axios.get(`/api/members/${memberId}`)
//             .then((res) => {
//                 this.setState({ member: res.data })
//             })
//     }

//     createNewPlace = () => {
//         const memberId = this.props.match.params.memberId
//         axios.post(`/api/members/${memberId}/places`).then((res) => {
//             console.log(res.data)
//             this.getSingleMember()
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.member.name}</h1>

//                 <Place member={this.state.member}
//                     getSingleMember={this.getSingleMember}
//                 />
//             </div>
//         )
//     }
// }

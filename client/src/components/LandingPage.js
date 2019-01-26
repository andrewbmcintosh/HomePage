import React, { Component } from 'react'
import MemberList from './Members/MemberList';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <p>Hi from Landing Page!</p>
        <MemberList />
      </div>
    )
  }
}

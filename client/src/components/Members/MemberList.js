import React, { Component } from 'react'
import axios from 'axios'
import StatusPing from './StatusPing';
import SingleMember from './SingleMember';
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Grid from "@material-ui/core/Grid";
import BotNav from '../BotNav';



const styles = theme => ({
    root: {
        display: 'flex',
    },
});

class MemberList extends Component {
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
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                {this.state.members.map((member, i) => (
                    <div key={i}>
                        <StatusPing memberId={member._id} memberName={member.name} membersCurrentStatus={member.currentStatus}
                            memberTimeSincePing={member.timeSincePing}
                        />
                    </div>
                ))}
               <BotNav />
            </div>
            // i want to have a button that i will click on this screen and it will trigger the ping
            // in that persons StatusPing. it would be helpful to look at the user forms from in class
            // examples

        )
    }
}

export default withStyles(styles)(MemberList)
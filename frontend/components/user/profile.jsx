import React from 'react';
import { withRouter } from 'react-router-dom';

class Restaurant extends React.Component {
  constructor(props) {
    super(props);

    this.delegateReservations = this.delegateReservations.bind(this);
  }

  componentWillMount() {
    if (!this.props.currentUser.username) {
      this.props.history.push('/');
    }
  }

  delegateReservations() {
    this.upcoming_reservations = [];
    this.past_reservations = [];
    const time = new Date()
    debugger

    // this.props.reservations.forEach((reservation) => {
    // });

  }


  render() {
    this.delegateReservations();

    return (
      <h3>Hi</h3>
    );
  }
}

export default Restaurant;
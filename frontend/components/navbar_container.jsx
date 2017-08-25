import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import Navbar from './navbar';
import { login, logout, signup, removeErrors, receiveCurrentUser } from '../actions/session_actions';

const mapStateToProps = ( state ) => {
  return {
    loggedIn: state.session.currentUser != null,
    currentUser: state.session.currentUser,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

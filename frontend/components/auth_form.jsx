import React from 'react';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.closeModal());
  }

  handleChange(field) {
    return (e) => this.setState({[field]: e.currentTarget.value});
  }

  render() {
    return (
      <section className='model-div'>
        <h3 className='mock-header'>Welcome to EasySeating!</h3>
        <form className='SomeForm'>
          <input type="text" onChange={this.handleChange("username")} name="user[username]" value={this.state.username} placeholder='username'/>
          <input type="text" onChange={this.handleChange("password")} name="user[password]" value={this.state.password} placeholder='password'/>
          <button type="submit" className='form-submit' onClick={this.handleSubmit}>{this.props.formType}</button>
        </form>
      </section>
    );
  }
}

export default AuthForm;
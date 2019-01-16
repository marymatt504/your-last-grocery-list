import React from 'react';

class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: 'Email',
      password: 'Password'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  clearInput(event) {
    if (this['state'][event.target.name] === 'Email' || this['state'][event.target.name] === 'Password') {
      this.setState({ [event.target.name]: '' });
    }
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className='navBar'>
        <div className='logo'><div>Your Last</div><div>Grocery List</div></div>
        <form className='loginForm' onSubmit={this.handleSubmit}>
          <label className='formComponent'>
            <input onClick={this.clearInput} name='email' type="text" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label className='formComponent'>
            <input onClick={this.clearInput} name='password' type="text" value={this.state.password} onChange={this.handleChange} />
          </label>
          <input className='formComponent' type="submit" value="Sign in" />
        </form>
      </div>
    )
  }


}
export default Nav;


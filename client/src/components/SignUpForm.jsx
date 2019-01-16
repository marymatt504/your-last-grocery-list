import React from 'react';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      <form className='signUpForm' onSubmit={this.handleSubmit}>
        <h2>Create an account</h2>
        <label className='label'>
          <div>
            {`Email: `}
            <input name='email' type="text" value={this.state.email} onChange={this.handleChange} />
          </div>
        </label>
        <label className='label'>
          <div>
            {`Password: `}
            <input name='password' type="text" value={this.state.password} onChange={this.handleChange} />
          </div>
        </label>
        <input type="submit" value="Sign up for free" />
      </form>
    );
  }
}

export default SignUpForm;
import React, { Component } from 'react';

import LoginForm from './LoginForm/LoginForm';

class LoginContainer extends Component {

handleSubmit=(values)=>{
  console.log(values)
}

  render() {
    return (
      <LoginForm 
      onSubmit={this.handleSubmit}
      />
    );
  }
}

export default LoginContainer;

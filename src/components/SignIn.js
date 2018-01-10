import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

const SignInPage = ({ history }) =>
  <div>
    <h1>SignIn</h1>
    <SignInForm history={history} />
    <SignUpLink />
  </div>


const byPropKey = (propertyName, value) => () => ({
 [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props){
    super(props);
    this.state = { ...INITIAL_STATE }
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then( () => {
        this.setState( () => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch( error => {
        this.setState(byPropKey('error', error));
      });
      event.preventDefault();

  }

  messagePtBR(message){
    switch (message) {
      case 'There is no user record corresponding to this identifier. The user may have been deleted.':
          return 'Não há registro de usuário correspondente a este identificador. O usuário pode ter sido excluído.'
        break;
      case 'The email address is badly formatted.':
        return 'O endereço de e-mail está mal formatado.'
      case 'The password is invalid or the user does not have a password.':
        return 'A senha é inválida ou o usuário não possui uma senha.'
      default:
        'Por favor, verifique se as informações estã ocorretas.'
        break;
    }
  }

  render(){
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid = 
      password === '' ||
      email === '';

      return(
        <form onSubmit={this.onSubmit}>
         <input 
            value={email}
            onChange={ event => this.setState(byPropKey('email', event.target.value) )}
            type="text"
            placeholder="Email Address"
           />
           <input 
             value={password}
             onChange={ event => this.setState(byPropKey('password', event.target.value)) }
             type="password"
             placeholder="Password"
           />

           <button disabled={isInvalid} type="submit">Sign in</button>

           { error && <p>{this.messagePtBR(error.message)}</p> }

        </form>
      );
  }
}

export default withRouter(SignInPage);
export {
  SignInForm,
};
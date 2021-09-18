import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.style.scss';

export class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const { email, password } = event.target;
        this.setState({ email: email, password:  password })
    }

    handleSubmit = (event) => {
        this.setState({ email: '', password: '' });
    }

    render() {
        return (
            <div className='sign-in'> 
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        label='Email'
                        value={this.state.email}
                        handleChange={this.handleChange} 
                        required 
                    />
                    <FormInput
                        name='password' 
                        type='password'
                        label='Password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    />

                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton 
                            onClick={signInWithGoogle}
                            isGoogleSignIn  // this value gets passed as true
                        >
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form> 
            </div>
        )
    }
}

export default SignIn;

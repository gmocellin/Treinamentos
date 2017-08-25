import React, { Component } from 'react';
import { Card, CardSection, Button, TextField } from './common';

class LoginForm extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <TextField 
                        label='Email' 
                        placeholder='email@gmail.com'
                    />
                </CardSection>

                <CardSection>
                    <TextField 
                        label='Password' 
                        secureTextEntry
                        placeholder='password'
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>

            </Card>
        );
    }
}

export default LoginForm;

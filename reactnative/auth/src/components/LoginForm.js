import React, { Component } from 'react';

import { Card, CardSection, Button, TextField } from './common';

class LoginForm extends Component {
    state = { email: '', password: '' };
    render() {
        return (
            <Card>
                <CardSection>
                    <TextField 
                        label='Email'
                        autoCorrect={false}
                        placeholder={'user@gmail.com'}
                        value={this.state.email}
                        onChangeText={email => this.setState({ ...this.state, email })}
                    />
                </CardSection>

                <CardSection>
                    <TextField  
                        label='Password'
                        placeholder={'*****'}
                        password={!false}
                        autoCorrect={false}
                        value={this.state.password}
                        onChangeText={password => this.setState({ ...this.state, password })}
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

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Card, CardSection, Button, TextField, Spinner, ErrorText } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication Failed.', 
            loading: false 
        });
    }

    onLoginSuccess() {
        this.setState({ 
            email: '', 
            password: '', 
            error: '', 
            loading: false 
        });
    }

    renderButton() {
        if (this.state.loading) {
            return (
                <CardSection >
                    <Spinner size={'small'} />
                </CardSection >
            );
        } 

        if (this.state.error !== '') {
            return (
                <View>
                    <CardSection >
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Log In
                        </Button>
                    </CardSection >
                    <ErrorText errorText={this.state.error} />
                </View>
            );
        }

        return (
            <CardSection >
                <Button onPress={this.onButtonPress.bind(this)}>
                    Log In
                </Button>
            </CardSection >
        );

    }

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
                        placeholder={'password'}
                        secureTextEntry
                        autoCorrect={false}
                        value={this.state.password}
                        onChangeText={password => this.setState({ ...this.state, password })}
                    />
                </CardSection>

                {this.renderButton()}
            </Card>
        );
    }
}

export default LoginForm;

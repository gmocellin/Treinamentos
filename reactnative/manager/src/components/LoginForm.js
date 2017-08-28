import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, Button, TextField, ErrorText, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <TextField 
                        label='Email' 
                        placeholder='email@gmail.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <TextField 
                        label='Password' 
                        secureTextEntry
                        placeholder='password'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <CardSection>
                    {this.renderButton()}
                </CardSection>

                <ErrorText errorText={this.props.error} />

            </Card>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);

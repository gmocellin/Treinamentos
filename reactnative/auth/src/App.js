import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCzyd7Zk2cwBdAYOEBpdZeBiRtoMdK0R38',
            authDomain: 'auth-adfc0.firebaseapp.com',
            databaseURL: 'https://auth-adfc0.firebaseio.com',
            projectId: 'auth-adfc0',
            storageBucket: 'auth-adfc0.appspot.com',
            messagingSenderId: '968283289902'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true: 
                return (
                    <View >
                        <Header headerText='Authentication' />
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>
                                Log Out
                            </Button>
                        </CardSection>
                    </View>
                );
            case false: 
                return (
                    <View >
                        <Header headerText='Authentication' />
                        <LoginForm />
                    </View>
                );
            default:
                return (
                    <View style={styles.alignSpinner} >
                        <Spinner size="large" />
                    </View>
                );
        }
    }

    render() {
        return (
            <View>
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    alignSpinner: {
        marginTop: 280
    }
};

export default App;

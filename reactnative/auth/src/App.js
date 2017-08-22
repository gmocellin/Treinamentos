import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCzyd7Zk2cwBdAYOEBpdZeBiRtoMdK0R38',
            authDomain: 'auth-adfc0.firebaseapp.com',
            databaseURL: 'https://auth-adfc0.firebaseio.com',
            projectId: 'auth-adfc0',
            storageBucket: 'auth-adfc0.appspot.com',
            messagingSenderId: '968283289902'
        });
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                <LoginForm />
            </View>
        );
    }
}

export default App;

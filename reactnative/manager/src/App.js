import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBnpaDuYA_cdfsdtc7aq_ttRX33iHtzBMA',
            authDomain: 'manager-7645b.firebaseapp.com',
            databaseURL: 'https://manager-7645b.firebaseio.com',
            projectId: 'manager-7645b',
            storageBucket: 'manager-7645b.appspot.com',
            messagingSenderId: '688370623588'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <LoginForm />
                </View>
            </Provider> 
        );
    }
}

export default App;

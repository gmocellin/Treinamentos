import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import Router from './Router';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider> 
        );
    }
}

export default App;

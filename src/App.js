import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import Router from './Router'

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyAzdCxQjJtIjzd8327a0U56J5TdVz3l2J4",
            authDomain: "manager-6c47a.firebaseapp.com",
            databaseURL: "https://manager-6c47a.firebaseio.com",
            projectId: "manager-6c47a",
            storageBucket: "manager-6c47a.appspot.com",
            messagingSenderId: "833090884058"
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }
}

export default App
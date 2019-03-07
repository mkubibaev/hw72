import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import picturesReducer from './src/store/picturesReducer';
import Pictures from "./src/containers/Pictures/Pictures";

const store = createStore(picturesReducer, applyMiddleware(thunkMiddleware));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Pictures/>
            </Provider>
        );
    }
}

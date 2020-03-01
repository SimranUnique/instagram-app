import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import configureStore from './store';
import {BrowserRouter as Router, Route} from "react-router-dom";

import UserContainer from './containers/UserContainer';
import PostContainer from './containers/PostContainer';

const store = configureStore({});

const Root = () => (
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={UserContainer}/>
            <Route path="/post/:postId" component={PostContainer}/>
        </Router>
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

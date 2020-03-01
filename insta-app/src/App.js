import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {addComment} from "./actions/post";
import {connect} from "react-redux";

class App extends Component{
    handleAddComment = () => {
        this.props.addComment({
            postId: 'AB01',
            comment: {
                name: 'Simran',
                comment: 'New Comment'
            }
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p onClick={this.handleAddComment}>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  user: state.user,
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
    addComment: (comment) => dispatch(addComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

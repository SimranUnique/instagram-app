import React, {Component} from 'react';
import UserHeader from '../components/UserHeader';
import UserBody from '../components/UserBody';
import {connect} from "react-redux";
import '../styles/styles.css';

class UserContainer extends Component {
    render() {
        return (
            <section className="main_section">
                <UserHeader user={this.props.user}/>
                <UserBody posts={this.props.posts} user={this.props.user}/>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    posts: state.posts
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);


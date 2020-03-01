import React, {Component} from 'react';
import UserHeader from '../components/UserHeader';
import Post from '../components/Post';
import '../styles/styles.css';
import {connect} from "react-redux";
import {each} from 'lodash';
import {addComment, incrementLike} from "../actions/post";

class PostContainer extends Component {
    handleLikeOnClick = () => {
        this.props.incrementLike({
            postId: this.props.postId
        });
    };

    handleAddComment = event => {
        if(event.keyCode === 13) {
            this.props.addComment({
                postId: this.props.postId,
                comment: {user: this.props.user.name, comment: event.target.value}
            });
        }
    };

    getCommentsView = () => {
        const commentsView = [];

        each(this.props.posts[this.props.postId].comments, (eachComment, index) => {
            commentsView.push(
                <div className="comment_container" key={`${this.props.postId}_comment_${index}`}>
                    <span className="comment_user">{eachComment.user}</span><span>{eachComment.comment}</span>
                </div>
            );
        });
        return commentsView;
    };

    getPostedTime = post => {
        const timeNow = new Date();
        const seconds = Math.floor((timeNow - post.postTime)/1000);
        if(seconds < 60) {
            return `${seconds} seconds`;
        } else if(seconds/60 < 60) {
            const minutes = Math.floor(seconds/60);
            return `${minutes} ${minutes > 1 ? 'minutes' : 'minute'}`;
        } else if(seconds/3600 < 24) {
            const hours = Math.floor(seconds/3600);
            return `${hours} ${hours > 1 ? 'hours' : 'hour'}`;
        } else if(seconds/86400 < 30) {
            const days = Math.floor(seconds/86400);
            return `${days} ${days > 1 ? 'days' : 'day'}`;
        } else if(seconds/2592000 < 12) {
            const months = Math.floor(seconds/2592000);
            return `${months} ${months > 1 ? 'months' : 'month'}`;
        } else {
            const years = Math.floor(seconds/31536000);
            return `${years} ${years > 1 ? 'years' : 'year'}`;
        }
    };

    render() {
        const post = this.props.posts[this.props.postId];

        return (
            <section className="main_section">
                <UserHeader user={this.props.user}/>
                <Post postId={this.props.postId} post={post} likeClickHandler={this.handleLikeOnClick}/>
                <div className="post_body">
                    <div>{`${this.getPostedTime(post)} ago`}</div>
                    {post.likes > 0 &&
                        <div className="likes_count">{`${post.likes} Likes`}</div>
                    }
                    {this.getCommentsView()}
                    <input className="add_comment" placeholder="Add Comment" onKeyUp={this.handleAddComment}></input>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state, props) => {
    const {match: {params: {postId}}} = props;
    return {
        user: state.user,
        posts: state.posts,
        postId
    }
};

const mapDispatchToProps = dispatch => ({
    addComment: comment => dispatch(addComment(comment)),
    incrementLike: postId => dispatch(incrementLike(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);


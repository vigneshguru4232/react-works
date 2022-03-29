import React, { Component } from "react";
import axios from "axios";
import { fetchPosts } from "../actions/PostActions";
import {connect} from "react-redux"

class Posts extends Component {


  componentDidMount() {
    console.log(this.props.fetchPosts())
  }
  render() {
    return (
      <div>
        <h1>Posts</h1>
        <div>
         
          {this.props.posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.items,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);

import React from "react";
import { Link } from "react-router-dom";
function PostList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Link to={`/${post.id}`} key={post.id}>
          <li>{post.title}</li>
        </Link>
      ))}
    </div>
  );
}

export default PostList;

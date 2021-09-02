import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/posts/PostActions";
import { Link } from "react-router-dom";
function Posts() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const PostsList = () => {
    return (
      <div>
        {posts.map((post, index) => (
          <Link to={`${post.id}`}>
            <p key={post.id}>{post.title}</p>
          </Link>
        ))}
      </div>
    );
  };

  if (posts && posts.loading) return <div>Loading......</div>;
  else
    return (
      <div>
        <PostsList />
      </div>
    );
}

export default Posts;

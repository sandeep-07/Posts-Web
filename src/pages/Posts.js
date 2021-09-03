import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/posts/PostActions";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import axios from "axios";
function Posts() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const PostsList = () => {
    const [pic, setPic] = useState("");
    axios
      .get(
        "https://api.unsplash.com/photos/random?client_id=XbAz5Y3y1lpBuqdo4jkakWrKZGkaYHFwGqbbZTAlzW0"
      )
      .then((response) => {
        setPic(response.data.urls.small);
      });

    return (
      <div className="container">
        <div className="row">
          {posts.map((post, index) => {
            return (
              <div className="col-sm-12 col-md-4" key={post.id}>
                <Link
                  to={`posts/${post.id}`}
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <PostCard post={post} />
                </Link>
              </div>
            );
          })}
        </div>
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

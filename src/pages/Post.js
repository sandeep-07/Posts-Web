import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../redux/post/PostActions";

function Post() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.post);
  const loading = useSelector((state) => state.post.loading);
  useEffect(() => {
    dispatch(fetchPost(id));
  }, [id]);
  if (loading) return <div>Loading</div>;
  else return <div>{post && post.title}</div>;
}

export default Post;

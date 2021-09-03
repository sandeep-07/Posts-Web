import React, { useEffect, useState, Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../redux/post/PostActions";
import pic from "../assets/pic.svg";
function Post() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.post);
  const loading = useSelector((state) => state.post.loading);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [id]);

  if (!loading && post) {
    return (
      <div className="container">
        <div className="row my-5">
          <div className="col-sm-12 col-md-6 mt-5">
            <div>
              <img
                style={{ objectFit: "cover", width: "100%", height: "300px" }}
                src={pic}
                alt="nf"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <h3 className="text-capitalize">
              <u>{post.title}</u>
            </h3>
            <p>{post.body}</p>
          </div>
        </div>
      </div>
    );
  } else {
    dispatch(fetchPost(id));

    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div
          className="spinner-border"
          style={{ width: "75px", height: "75px" }}
        ></div>
        ;
      </div>
    );
  }
}

export default Post;

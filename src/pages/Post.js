import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../redux/post/PostActions";
function Post() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.post);
  const loading = useSelector((state) => state.post.loading);
  const [pic, setPic] = useState("");
  useEffect(() => {
    dispatch(fetchPost(id));
  }, [id]);

  if (!loading && post) {
    return (
      <div className="container">
        <div className="row my-5">
          <div className="col-sm-12 col-md-6">
            <div className="backgroundImage">
              <img
                style={{ objectFit: "cover", width: "100%", height: "300px" }}
                src={`https://source.unsplash.com/random?sig=${Math.random()}`}
                alt="nf"
              />
            </div>
            <small className="text-muted">(Any random image)</small>
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
      <>
        <div className="spinner-border"></div>;
      </>
    );
  }
}

export default Post;

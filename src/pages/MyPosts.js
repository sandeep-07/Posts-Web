import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
function MyPosts() {
  const mypost = useSelector((state) => state.createdPosts);

  if (mypost.length !== 0) {
    return (
      <div className="container">
        <h1 className="text-center mt-3  mb-5">My Posts</h1>
        <div class="list-group ">
          <div className="w-100">
            {mypost.map((post, ind) => (
              <div className="list-group-item list-group-item-action p-3">
                <div class="d-flex w-100 justify-content-between">
                  <h4 className="mb-1">{post.title}</h4>
                </div>
                <p className="mb-1" style={{ width: "60%" }}>
                  {post.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className=" text-center"
        style={{ height: "80vh", marginTop: "9rem" }}
      >
        <h1>You have not posted anything.Post now</h1>
        <h2>
          <Link to="/create">Create Post</Link>
        </h2>
      </div>
    );
  }
}

export default MyPosts;

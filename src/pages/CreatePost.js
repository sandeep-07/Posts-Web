import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../redux";
import uniqid from "uniqid";
import person from "../assets/pr.svg";
import { toast } from "react-toastify";
function CreatePost() {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center mt-3">
          <img src={person} alt="not found" style={{ width: "100%" }} />
        </div>
        <div className="col-sm-12 col-md-6">
          {/* <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <input value={post} onChange={(e) => setPost(e.target.value)} />
          <button
            onClick={() => {
              dispatch(createPost({ title, post, id: uniqid() }));
              setTitle("");
              setPost("");
            }}
          >
            Create Post
          </button> */}

          <div class="mb-3 mt-2">
            <label for="title" class="form-label">
              <h6>Title</h6>
            </label>
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="Your title goes here"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="posttext" class="form-label">
              <h6>Post Text</h6>
            </label>
            <textarea
              value={post}
              onChange={(e) => setPost(e.target.value)}
              class="form-control"
              id="posttext"
              rows="4"
            ></textarea>
          </div>
          <button
            onClick={() => {
              if (title && post) {
                dispatch(createPost({ title, text: post, id: uniqid() }));
                setTitle("");
                setPost("");
              } else {
                toast.error("title/text should not be empty");
              }
            }}
            class="btn btn-primary"
          >
            Create Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;

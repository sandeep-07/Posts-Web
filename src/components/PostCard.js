import React, { useEffect, useState } from "react";
function PostCard(data) {
  return (
    <div>
      <div className="card m-2 h-100">
        {/* <img className="card-img top" src={pic} alt="nf" /> */}
        <div className="card-body">
          <h5 className="card-title">{data.post.title.substr(0, 10)}...</h5>
          <h6 className="card-subtitle mb-2 text-muted">subtitle</h6>
          <p className="card-text">{data.post.body.substr(0, 30)}...</p>
        </div>
      </div>
    </div>
  );
}

export default PostCard;

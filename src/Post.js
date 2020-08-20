import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="ParkJinseo"
          src="/static/images/avatar/1.jpg"
        />

        <h3>Username</h3>
      </div>

      <img
        className="post__image"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/University_of_Maryland_seal.svg/1200px-University_of_Maryland_seal.svg.png"
        alt=""
      />
      <h4 className="post__text">
        <strong>jinseo </strong>This is UMD logo
      </h4>
    </div>
  );
}

export default Post;

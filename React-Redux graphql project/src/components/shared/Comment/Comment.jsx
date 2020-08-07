import React from "react";
import { Avatar } from "antd";
import "./Comment.scss";

const Comment = (props) => {
  const { commentText, avatarSrc, author } = props;
  return (
    <>
      <div className="comment">
        <div className="comment-avatar">
          <Avatar src={avatarSrc} />
        </div>
        <div className="comment-box">
          <div className="comment-box-author">
            <h3>{author}</h3>
            <span>15 oct</span>
          </div>
          <div className="comment-text">{commentText}</div>
        </div>
      </div>
    </>
  );
};
export default Comment;

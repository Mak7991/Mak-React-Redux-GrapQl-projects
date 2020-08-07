import React from "react";
import "./PostBody.scss";

const PostBody = (props) => {
  return (
    <div className="post-body-wrapper">
      <div className="post-body">
        <div className="post-body-text-content">{props.data}</div>
        {/* <div className="post-body-media-content">
          <div className="post-media">
            <img
              src="https://cdn.pixabay.com/photo/2020/04/04/18/50/cannabis-5003417_960_720.jpg"
              alt=""
            />
          </div>
        </div> */}
        {/* yeh wala comments reh ga */}
      </div>
    </div>
  );
};

export default PostBody;

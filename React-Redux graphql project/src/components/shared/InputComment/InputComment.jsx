import React from "react";
import { Avatar, Input, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
import "./InputComment.scss";

function InputComment(props) {
  const { title, onChangeTextarea, onClickPostButton } = props;
  return (
    <div className="input-comment-wrapper">
      {title && <h3 className="input-comment-title">{title}</h3>}
      <div className="input-comment">
        <div className="input-comment-avatar">
          <Avatar src="https://cdn.pixabay.com/photo/2020/04/04/18/50/cannabis-5003417_960_720.jpg" />
        </div>
        <div className="input-comment-text-input">
          <Input.TextArea
            onChange={onChangeTextarea}
            style={{ borderRadius: "16px", resize: "none" }}
            placeholder="Add a comment"
            autoSize={{ minRows: 1, maxRows: 6 }}
          />
        </div>
      </div>
      <div className="input-commnet-post-button">
        <Button type="primary" onClick={onClickPostButton} icon={<SendOutlined />}>
          Post
        </Button>
      </div>
    </div>
  );
}
InputComment.defaultProps = {};
export default InputComment;

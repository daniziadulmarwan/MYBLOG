import React from "react";
import "./createblog.scss";
import { Button, Gap, Input, Textarea, Upload, Link } from "../../components";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const history = useHistory();
  return (
    <div className="blog-post">
      <Link className="link" title="Back" onClick={() => history.push("/")} />
      <p className="title">Create New Blog Post</p>
      <Input label="Post Title" />
      <Upload />
      <Textarea />
      <Gap height={20} />
      <div className="button-action">
        <Button title="Save" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default CreateBlog;

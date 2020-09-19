import React from "react";
import { BlogImg } from "../../../assets";
import { Button, Gap } from "../../atoms";
import "./blogitem.scss";
import { useHistory } from "react-router-dom";

const BlogItem = () => {
  const history = useHistory();
  return (
    <div className="blog-item">
      <img className="image-thumb" src={BlogImg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Post Date</p>
        <p className="body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
          molestias accusamus iure modi illo enim totam, libero excepturi
          possimus ad exercitationem illum beatae. Qui ea aperiam vero eum
          numquam tempora earum iste reiciendis ipsa, consectetur consequuntur
          perferendis obcaecati unde nobis labore, maxime ex fugiat sapiente
          aspernatur et saepe soluta quibusdam!
        </p>
        <Gap height={10} />
        <Button
          title="View Detail"
          onClick={() => history.push("/detail-blog")}
        />
      </div>
    </div>
  );
};

export default BlogItem;

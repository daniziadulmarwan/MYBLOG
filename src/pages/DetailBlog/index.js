import React from "react";
import "./detailBlog.scss";
import { BlogImg } from "../../assets";
import { Link } from "../../components";
import { useHistory } from "react-router-dom";

const DetailBlog = () => {
  const history = useHistory();
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={BlogImg} alt="thumb" />
      <p className="blog-title ">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
        ducimus cum voluptate dolorum suscipit, non nobis. Ipsam ipsum neque
        eveniet cum necessitatibus porro dolores cupiditate deleniti sed libero
        asperiores minima reprehenderit deserunt officiis, cumque magnam,
        voluptate perspiciatis. Hic cumque a repellendus optio rem ipsam
        praesentium quisquam numquam possimus ad ab deserunt sequi quod saepe
        excepturi iusto, reiciendis voluptas cupiditate consequuntur voluptate
        vitae nobis. Fuga ipsa ut maxime cupiditate necessitatibus, corrupti,
        nesciunt quisquam consequatur corporis sit voluptatum dolore cum.
        Reprehenderit, alias!
      </p>
      <Link title="Back to home" onClick={() => history.push("/")} />
    </div>
  );
};

export default DetailBlog;

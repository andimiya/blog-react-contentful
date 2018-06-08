import React from "react";
import { Link } from "react-router-dom";

const BlogRollItem = props => {
  return (
    <div className="grid-container-outer">
      <div>
        <div>{props.title}</div>
        <div>
          <Link to={`/blog/${props.slug}`} onClick={props.handleResourceClick}>
            Read More
          </Link>
        </div>
        <div>{props.author}</div>
        <div>{props.body}</div>
        <div>{props.date}</div>
      </div>
    </div>
  );
};

export default BlogRollItem;

import React from 'react';
import { Link } from 'react-router-dom';

const BlogRollItem = props => {
  return (
    <ul className="post-list">
      <li>
        <h2>
          <Link
            to={`/blog/${props.slug}`}
            className="post-link"
            onClick={props.handleResourceClick}
          >
            {props.title}
          </Link>
        </h2>
        <div className="post-preview">
          <p>{props.body}</p>
        </div>
        <Link
          to={`/blog/${props.slug}`}
          className="post-cta"
          onClick={props.handleResourceClick}
        >
          Read more
        </Link>
        <div className="post-meta">
          <ul>
            <li className="post-date">{props.date}</li>
            <li className="post-author">{props.author}</li>
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default BlogRollItem;

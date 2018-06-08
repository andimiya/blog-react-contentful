import React from 'react';
import { Link } from 'react-router-dom';

const BlogRollItem = props => {
  return (
    <ul className="post-list">
      <li>
        <Link to={`/blog/${props.slug}`} onClick={props.handleResourceClick}>
          <h2>{props.title}</h2>
        </Link>
        <div className="post-preview">
          <p>{props.body}</p>
        </div>
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

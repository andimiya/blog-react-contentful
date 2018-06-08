import React from 'react';
const BlogTitle = require('../assets/blog.svg');

const PageHeader = props => {
  return (
   
  <section className="blog-heading">
    <div className="blog-container">
      <img className="sudokrew-logo-img" width="400px" src={BlogTitle} alt="Blog Title" />
    </div>
</section>
  );
};

export default PageHeader;

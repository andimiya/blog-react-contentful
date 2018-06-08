import React from "react";
import { Link } from "react-router-dom";
import { createClient } from "contentful";
import { SPACE_ID, ACCESSTOKEN } from "../../constants";

class BlogPageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.getAllResources = this.getAllResources.bind(this);

    this.client = createClient({
      space: SPACE_ID,
      accessToken: ACCESSTOKEN
    });

    this.state = {
      blogTitle: null,
      blogAuthor: null,
      blogBody: null,
      error: ""
    };
  }

  componentDidMount() {
    this.getAllResources();
  }

  getAllResources() {
    this.client
      .getEntries({
        content_type: "2wKn6yEnZewu2SCCkus4as"
      })
      .then(blog => {
        const postId = this.props.location.pathname.split("/").pop();
        const findPost = blog.items.find(
          ({ fields, sys }, index) => fields.slug === postId
        );
        findPost.fields.author.map(({ fields, sys }, index) => {
          return this.setState({ blogAuthor: fields.name });
        });

        return this.setState({
          blogTitle: findPost.fields.title.toString(),
          blogBody: findPost.fields.body.toString()
        });
      });
  }

  render() {
    return (
      <div className="work-container outer">
        <div className="grid-area-container">
          <Link to="/blog">Back to Blog Roll</Link>
          <div>
            <h1>Title: {this.state.blogTitle}</h1>
            <h2>Author: {this.state.blogAuthor}</h2>
            <p>{this.state.blogBody}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPageContainer;

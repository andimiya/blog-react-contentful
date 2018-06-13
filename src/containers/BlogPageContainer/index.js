import React from 'react';
import { Link } from 'react-router-dom';
import { createClient } from 'contentful';
import { SPACE_ID, ACCESSTOKEN } from '../../constants';
import moment from 'moment';
import marked from 'marked';

class BlogPageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.getAllResources = this.getAllResources.bind(this);
    this.parseMarkdown = this.parseMarkdown.bind(this);

    this.client = createClient({
      space: SPACE_ID,
      accessToken: ACCESSTOKEN
    });

    this.state = {
      blogTitle: null,
      blogAuthor: null,
      blogBody: null,
      blogDate: null,
      blogEmbed: null,
      error: ''
    };
  }

  componentDidMount() {
    this.getAllResources();
  }

  getAllResources() {
    this.client
      .getEntries({
        content_type: '2wKn6yEnZewu2SCCkus4as'
      })
      .then(blog => {
        const postId = this.props.location.pathname.split('/').pop();
        const findPost = blog.items.find(
          ({ fields, sys }, index) => fields.slug === postId
        );
        return this.setState({
          blogTitle: findPost.fields.title.toString(),
          blogBody: findPost.fields.body.toString(),
          blogAuthor: findPost.fields.author.toString(),
          blogDate: moment(findPost.sys.createdAt).format('LL'),
          blogEmbed: findPost.fields.soundCloud
        });
      });
  }

  parseMarkdown() {
    return {
      __html: marked(this.state.blogBody, { sanitize: true })
    };
  }

  render() {
    return (
      <article className="post">
        <header className="post-header">
          <div className="container">
            <Link to="/" className="roll-link">
              Back to blog posts
            </Link>
            <h1 className="post-title">Title: {this.state.blogTitle}</h1>
            <p className="post-meta">
              <time>{this.state.blogDate}</time> •{' '}
              <span>
                <span>{this.state.blogAuthor}</span>
              </span>
            </p>
          </div>
        </header>
        <div className="post-content">
          <div className="container">
            {!this.state.blogEmbed ? (
              <div />
            ) : (
              <iframe
                title={this.state.blogTitle}
                width="100%"
                height="100"
                scrolling="no"
                frameBorder="no"
                src={this.state.blogEmbed}
              />
            )}
            {this.state.blogBody && (
              <div dangerouslySetInnerHTML={this.parseMarkdown()} />
            )}
          </div>
        </div>
      </article>
    );
  }
}

export default BlogPageContainer;

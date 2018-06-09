import React from 'react';
import BlogRollItem from '../../components/BlogRollItem';
import { createClient } from 'contentful';
import { SPACE_ID, ACCESSTOKEN } from '../../constants';
import BlogTitle from '../../components/BlogTitle';
import moment from 'moment';
import marked from 'marked';

class BlogRollContainer extends React.Component {
  constructor(props) {
    super(props);

    this.getAllResources = this.getAllResources.bind(this);

    this.client = createClient({
      space: SPACE_ID,
      accessToken: ACCESSTOKEN
    });

    this.state = {
      content: [],
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
        console.log(blog, 'blog');
        return this.setState({ content: blog.items });
      });
  }

  render() {
    return (
      <div className="home">
        <section className="blog-header">
          <div className="blog-container">
            <BlogTitle />
          </div>
        </section>
        <section className="blog-roll">
          <div className="container">
            {this.state.content.map(({ fields, sys }, index) => {
              return (
                <BlogRollItem
                  key={sys.id}
                  id={fields.slug}
                  title={fields.title}
                  author={fields.author}
                  slug={fields.slug}
                  date={moment(sys.createdAt).format('LL')}
                  body={fields.blogRollTextPreview}
                  handleResourceClick={this.props.handleResourceClick}
                />
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default BlogRollContainer;

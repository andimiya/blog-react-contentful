import React from 'react';
import BlogRollItem from '../../components/BlogRollItem';
import { createClient } from 'contentful';
import { SPACE_ID, ACCESSTOKEN } from '../../constants';
import PageTitle from '../../components/PageTitle';

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
        console.log(blog, 'entry');

        this.setState({ content: blog.items });
      });
  }

  render() {
    return (
      <div className="work-container outer">
        <PageTitle />
        <div className="grid-area-container">
          {this.state.content.map(({ fields, sys }, index) => {
            return (
              <BlogRollItem
                key={sys.id}
                id={fields.slug}
                title={fields.title}
                slug={fields.slug}
                date={sys.createdAt}
                body={fields.body.substring(0, 150)}
                handleResourceClick={this.props.handleResourceClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default BlogRollContainer;

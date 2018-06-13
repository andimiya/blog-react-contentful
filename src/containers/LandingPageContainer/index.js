import React from 'react';
import { Link } from 'react-router-dom';
import { createClient } from 'contentful';
import { SPACE_ID, ACCESSTOKEN } from '../../constants';
import EmailSignUp from '../../components/EmailSignUp.js';

class LandingPageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.getAllResources = this.getAllResources.bind(this);

    this.client = createClient({
      space: SPACE_ID,
      accessToken: ACCESSTOKEN
    });

    this.state = {
      pageTitle: null,
      pageBody: null,
      error: ''
    };
  }

  componentDidMount() {
    this.getAllResources();
  }

  getAllResources() {
    this.client
      .getEntries({
        content_type: 'landingPage'
      })
      .then(page => {
        const pageId = this.props.location.pathname.split('/').pop();
        const findPost = page.items.find(
          ({ fields, sys }, index) => fields.slug === pageId
        );

        return this.setState({
          pageTitle: findPost.fields.pageTitle,
          pageBody: findPost.fields.pageContents
        });
      });
  }

  render() {
    return (
      <div className="work-container outer">
        <div className="grid-area-container">
          <Link to="/">Back to Home</Link>
          <div>
            <h1>Landing Page Title{this.state.pageTitle}</h1>
            <h2>Body Text: {this.state.pageBody}</h2>
          </div>
        </div>
        <EmailSignUp />
      </div>
    );
  }
}

export default LandingPageContainer;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import PageTitle from './components/PageTitle';
// import HomepageContainer from './containers/HomepageContainer';
import BlogRollContainer from './containers/BlogRollContainer';
import BlogPageContainer from './containers/BlogPageContainer';
import Footer from './components/Footer';

const App = () =>
  <div id="app-container">
    <Router>
      <div className="app">
        <NavBar />
        <PageTitle />
        <Route exact path="/" component={BlogRollContainer} />
        <Route exact path="/blog" component={BlogRollContainer} />
        <Route exact path="/blog/:slug" component={BlogPageContainer} />
        <Footer />
      </div>
    </Router>
  </div>;

export default App;

import React from "react";

const EmailSignUp = props => {
  return (
    <div className="newsletter-banner-container">
      <div className="newsletter-inner">
        <div id="revue-embed">
          <form
            action="http://futureproof.sudokrew.com/add_subscriber"
            method="post"
            id="revue-form"
            name="revue-form"
            target="_blank"
          >
            <h2>Subscribe to our newsletter!</h2>
            <div className="revue-form-group">
              <label for="member_email">Email address</label>
              <input
                className="revue-form-field"
                placeholder="Email address"
                type="email"
                name="member[email]"
                id="member_email"
              />
            </div>
            <div className="revue-form-actions">
              <input
                type="submit"
                value="SIGN UP"
                name="member[subscribe]"
                id="member_submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailSignUp;

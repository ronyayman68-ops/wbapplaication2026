import React from 'react';
import './subscribe.css';

export const Subscribe = () => {
  return (
    <section className="subscribe" id="subscribe">
      <div className="container">
        <div className="subscribe-box">
          <div className="subscribe-text">
            <h3>Subscribe to our<br />Newsletter<br />& Never miss latest updates</h3>
          </div>
          <div className="subscribe-form">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="new-email-bx">
                <input type="email" placeholder="Email Address" />
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
import React, { Component } from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div>
          <span>Aferican Music</span>
        </div>
        <div>
          <span>Contact</span>
        </div>
        <div>
          <span>Playlists</span>
        </div>
        <div>
          <span>&copy;HYF 2018</span>
        </div>
        <style jsx>{`
          * {
            margin-bottom: 0px;
          }
          .footer {
            width: 100%;
            height: 100px;
            background-color: #333;
            color: #fff;
            line-height: 100px;
          }
          .footer div {
            width: 25%;
            display: inline-block;
            text-align: center;
          }
        `}</style>
      </footer>
    );
  }
}

export default Footer;

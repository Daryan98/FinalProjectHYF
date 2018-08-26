import React, { Component } from "react";
import { Link } from "react-router-dom";
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div>
          <span>Aferican Music</span>
        </div>
        <div>
          <Link className="link" to="allPlaylist">
            <span>All Playlists</span>
          </Link>
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
            width: 33.33%;
            display: inline-block;
            text-align: center;
          }
          .footer div .link {
            text-decoration: none;
            color: #fff;
          }

          .footer div .link:hover {
            border-bottom: 1px solid #fff;
          }
        `}</style>
      </footer>
    );
  }
}

export default Footer;

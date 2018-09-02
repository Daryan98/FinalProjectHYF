import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class PLayList extends React.Component {
  constructor() {
    super();
    this.state = {
      url_title: "default",
      playlist: "none",
      Langs: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/languages")
      .then(response => {
        let langNames = [];
        response.data.forEach((lang, i) => {
          langNames.push(lang.language_name);
        });
        this.setState({ Langs: langNames });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="Play_List_section">
        <div
          className="sections_name"
          style={{
            display: "block",
            width: "100%",
            height: "300px",
            color: "#fff",
            textAlign: "center",
            lineHeight: "300px",
            backgroundsize: "cover",
            background:
              "linear-gradient( to right bottom, rgba(50,109,233,0.9), rgba(126,82,232,0.9) ), url('https://images7.alphacoders.com/480/thumb-1920-480927.jpg'),no-repeat"
          }}
        >
          <h1>All Playlists</h1>
        </div>
        <a href="/" className="goBack_btn">
          <span>&#171; </span>
          Go back!
        </a>
        <div className="language_playlists">
          <h1>Language Playlists</h1>
          <div className="allplayLists">
            {this.state.Langs.map(lang => {
              return (
                <Link
                  style={{ textDecoration: "none", color: "#333" }}
                  className="card_link"
                  to={{
                    pathname: `/allplaylist/playlist/${lang}`,
                    language: lang
                  }}
                >
                  <div className="playList">
                    <img
                      width="100"
                      src="https://raw.githubusercontent.com/dpfernandes/class04-final-project/master/ama1.png"
                    />
                    <h2>{lang} Music</h2>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <style jsx>{`
          * {
            margin: 0;
            padding: 0;
          }
          .Play_List_section {
            width: 100%;
            position: relative;
          }
          .Play_List_section .language_playlists {
            max-width: 100%;
            min-heigh: 100%;
            position: relative;
            padding: 30px;
          }
          .Play_List_section .language_playlists h1 {
            display: inline-block;
            margin-left: 70px;
            width: auto;
            padding-bottom: 10px;
            border-bottom: 1px solid #333;
            margin-bottom: 40px;
          }
          .allplayLists {
            max-width: 100%;
            heigh: 100%;
            position: relative;
          }
          .allplayLists .playList {
            display: inline-block;
            width: 18%;
            margin: 0 1%;
            // box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
            text-align: center;
            height: 220px;
            margin-top: 0px;
          }

          .allplayLists .playList img {
            display: block;
            margin: 0 auto;
            width: 60%;
          }
          .allplayLists .playList h2 {
            font-size: 15px;
            margin-top: 20px;
          }
          a.goBack_btn {
            margin-top: 10px;
            height: 30px !important;
            width: 100px !important;

            display: block;
            text-decoration: none;
            color: #fff;
            position: absolute;
            top: 15px;
            left: 20px;
            line-heigh: 0 !important;
          }
          a.goBack_btn span {
            display: inline;
            font-size: 20px;
            margin-right: -10px;
            opacity: 0;
            transition: all 0.2s;
          }
          a.goBack_btn:hover span {
            margin-right: 0px;
            opacity: 1;
          }
        `}</style>
      </div>
    );
  }
}

export default PLayList;

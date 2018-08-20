import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Playlist from "../components/playlist";
class PLayList extends React.Component {
  constructor() {
    super();
    this.state = {
      playlist: "none",
      SongData: [],
      RecordDate: [],
      songsLang: [],

      playListName: "",
      playlistData: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/categories")
      .then(response => {
        this.setState({ SongData: response.data });

        this.state.SongData.filter(song =>
          this.state.songsLang.push(song.language)
        );
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get("http://localhost:3001/")
      .then(response => {
        this.setState({ RecordDate: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="Play_List_section">
        <div className="language_playlists">
          <div className="playlist_items">
            <a>All</a>
            <a>By Lang</a>
            <a>by country</a>
            <a>by traks</a>
            <a>by band</a>
          </div>

          {this.state.songsLang.forEach((song, i) => {})}
          {/* <Link
            className="playlist_link"
            to={`/playlist/${
              this.state.playlist != "none" ? this.state.playlist : null
            }`}
          >
            <div className="card_content">
              <img
                width="100"
                src="https://raw.githubusercontent.com/dpfernandes/class04-final-project/master/ama1.png"
              />
              <span>{song.title}</span>
            </div>
          </Link>
           */}
        </div>
      </div>
    );
  }
}

export default PLayList;

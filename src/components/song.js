import React from "react"; //...
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        audioLists: [
          {
            name: this.props.title,
            singer: this.props.artist,
            cover: "https://www.lijinke.cn/music/1387583682387727.jpg",
            musicSrc: "http://www.nihilus.net/soundtracks/Static%20Memories.mp3"
          }
        ],
        name: "Canon (piano version)",
        defaultPlayIndex: 0,
        volume: 100,
        muted: false,
        networkState: 1,
        readyState: 4,
        paused: false,
        ended: false,
        preload: "true",
        openText: "Play",
        closeText: "pause",
        panelTitle: "Song",
        toggleMode: false,
        mode: "full",
        autoPlay: true,
        startDate: null,
        defaultPosition: { top: 20, left: 400 },
        played: { length: 1 }
      }
    };
  }
  render() {
    return (
      <div
        style={{
          display: "block",
          width: "100%",
          maxHeight: "100vh"
        }}
      >
        <div className="song">
          <div className="song_info">
            <img
              className="song_image"
              src="https://raw.githubusercontent.com/dpfernandes/class04-final-project/master/ama1.png"
            />
            <a href="/" className="goBack_btn">
              <span>&#171; </span>
              Go back!
            </a>
          </div>
          <div className="impo_information">
            <h4>{this.props.title}</h4>
            <span>{this.props.artist}</span>
            <span className="year">{this.props.year}</span>
          </div>

          <ReactJkMusicPlayer {...this.state.options} />
          {/* <audio controls {...this.state.play}>
              <source
                src="http://www.nihilus.net/soundtracks/Static%20Memories.mp3"
                type="audio/mp3"
              />
            </audio> */}
        </div>
        <div className="clear-fix" />

        <style jsx>{`
          .clear-fix {
            clear: both;
          }
          .song {
            width: 100%;
            height: 90vh;
            position: relative;
          }

          span {
            display: block;
          }

          .song_info {
            width: 200px;
            display: inline-block;
            float: left;
            margin: 50px 0 0 50px;
          }
          .song_info img.song_image {
            display: inline;
            width: 250px;
            float: left;
          }

          .audio {
            width: 100%;
            height: 80px;
            background: #f1f3f4;
            position: absolute;
            bottom: 0;
          }

          .impo_information {
            display: inline-block;
            margin-left: 150px;
            margin-top: 50px;
            width: auto;
          }
          .impo_information h4 {
            font-size: 35px;
            margin-bottom: 20px;
          }

          .impo_information span {
            font-size: 18px;
            color: rgba(0, 0, 0, 0.7);
            margin-bottom: 10px;
          }
          .more_information span {
            font-size: 18px;
            color: rgba(0, 0, 0, 0.7);
          }

          .impo_information .buttons {
            display: inline-block;
            width: auto;
            margin-top: 20px;
            color: #fff;
          }
          .impo_information .buttons a {
            width: 140px;
            height: 40px;
            margin-right: 20px;
            border-radius: 20px;
            display: inline-block;
            background: linear-gradient(
              to right bottom,
              rgba(50, 109, 233, 0.9),
              rgba(126, 82, 232, 0.9)
            );
            text-decoration: none;
            line-height: 40px;
            color: #fff;
            text-align: center;
          }
          a.goBack_btn {
            margin-top: 10px;
            display: inline-block;
            text-decoration: none;
            color: #333;
          }
          a.goBack_btn span {
            display: inline;
            font-size: 20px;
            margin-right: -10px;
            opacity: 0;
            transition: all 0.2s;
          }
          a.goBack_btn:hover {
            color: rgba(50, 109, 233, 1);
          }
          a.goBack_btn:hover span {
            margin-right: 0px;
            opacity: 1;
          }

          .react-jinke-music-player {
            width: 60px !important;
            height: 60px !important;
            position: relative;
          }
          .react-jinke-music-player .music-player {
            width: 100% !important;
            height: 100% !important;
          }
          .react-jinke-music-player .music-player-controller {
            width: 100% !important;
            height: 100% !important;
          }

          .react-jinke-music-player-main .music-player-panel {
            bottom: 0px;
            position: fixed;
          }
          @import "https://fonts.googleapis.com/css?family=Lato";
        `}</style>
      </div>
    );
  }
}

export default Song;

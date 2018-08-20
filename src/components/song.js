import React from "react";
import ReactAudioPlayer from "react-audio-player";
//...

const Song = props => {
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
          <h4>{props.title}</h4>
          <span>{props.artist}</span>
          <span className="year">{props.year}</span>
          <div className="buttons">
            <a>Play</a>
          </div>
        </div>
        <div className="audio">
          <audio controls>
            <source
              src="http://www.nihilus.net/soundtracks/Static%20Memories.mp3"
              type="audio/mp3"
            />
          </audio>
        </div>
      </div>
      <div className="clear-fix" />

      <style jsx>{`
        * {
          margin-bottom: 10px;
        }
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
          background: #efefef;
          position: absolute;
          bottom: 0;
        }

        audio {
          position: absolute;
          top: 10px;
          display: flex;
          border-radius: 0;
          width: 90%;
          left: 5%;
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

        @import "https://fonts.googleapis.com/css?family=Lato";
      `}</style>
    </div>
  );
};

export default Song;

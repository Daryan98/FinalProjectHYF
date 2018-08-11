import React from "react";
const Song = (props) => {

    return(
        <div style={{
            display: "block",
            width: "100%",
            maxHeight:"100vh"
        }}>   
            <div className="song">
                <div className="song_info">
                    <img className="song_image" src="https://raw.githubusercontent.com/dpfernandes/class04-final-project/master/ama1.png"/>
                    <div className="impo_information">
                        <h4>{props.title}</h4>
                        <span>{props.artist}</span>
                        <span className="year">{props.year}</span>
                    </div>
                    {/* <div className="items">
                        <i>foverit</i>
                        <i>add to playlist</i>
                    </div> */}

                    <audio controls>
                        <source src="horse.ogg" type="audio/ogg"/>
                    </audio>
                </div>
                <div className="song_content">
                    <h2>more Information</h2>
                    <div className="more_information">
                        <span>{props.alternativeTitle}</span>
                        <span>{props.performer}</span>
                        <span>{props.band}</span>
                        <span>{props.label}</span>
                        <span>{props.language}</span>
                        <span>{props.location}</span>
                        <span>{props.physical}</span>
                        <span>{props.barcodes}</span>
                        <span>{props.tracks.all}</span>
                        <span>{props.physical}</span>
                    </div>
                </div>
                
                       
            </div>
       
            <style jsx>{`
             * {
                margin-bottom: 10px;
             }
                .song {
                    margin: 50px 0 0 50px;
                }
                
                span {
                    display: block;
                }

                
                .song_info {
                    width: 200px;
                    display: inline;
                    float: left;
                }
                .song_info img.song_image{
                    display: inline;
                    width: 200px;
                    float: left;
                }

                .song_info audio {
                    position: absolute;
                    width: 90%;
                    left: 5%;
                    bottom: 0;
                    display: flex;
                    border-radius: 0;
                }
                .song_content{
                    display: inline-block;
                    float: left;
                    margin-left: 150px;
                }
                @import 'https://fonts.googleapis.com/css?family=Lato';


                



            `}</style>
        </div>
        
    )
}

export default Song;
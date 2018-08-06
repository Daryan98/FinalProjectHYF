import React from "react";

const Song = (props) => {
    return(
        <div style={{
            display: "block",
            width: "100%",
            height:"100vh"
        }}>   
            <div className="song">
                <img src="https://raw.githubusercontent.com/dpfernandes/class04-final-project/master/ama1.png"/>
                <div className="impo_information">
                    <h2>{props.title}</h2>
                    <span>{props.artist}</span>
                    <span className="year">{props.year}</span>
                    <span>{props.tracks.all}</span>
                    <span>{props.language}</span>
                    <span>{props.performer}</span>
                    <a className="play_btn">Play</a>
                </div>
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
            `}</style>
        </div>
        
    )
}

export default Song;
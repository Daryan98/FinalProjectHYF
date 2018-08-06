import React, { Component } from "react";

class RadioSearch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="radio_buttons">
        <form>
          <ul>
            <li>
              <label>
                <input
                  // checked
                  type="radio"
                  value="all"
                  checked={this.props.FilterBy === "all"}
                  onChange={this.props.handleChange}
                />
                <span>All</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="titles"
                  checked={this.props.FilterBy === "titles"}
                  onChange={this.props.handleChange}
                />
                <span>Title</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="artists"
                  checked={this.props.FilterBy === "artists"}
                  onChange={this.props.handleChange}
                />
                <span>Artist</span>
              </label>
            </li>
            {/* <li>
              <label>
                <input
                  type="radio"
                  value="publishedYear"
                  // checked={this.state.FilterBy === "year"}
                  // onChange={this.handleChange}
                  checked={this.props.FilterBy === "publishedYear"}
                  onChange={this.props.handleChange}
                />
                <span>Year</span>
              </label>
            </li> */}
          </ul>
        </form>
        <style jsx>{`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }


          .radio_buttons {
            display: inline; float:left;
            margin-top: 19px;
            margin-left: -180px;

          }
          .radio_buttons li {
            list-style: none;
            display: inline; float: left;
            margin-right: 10px;
          }
          .radio_buttons li span {
            font-size: 12px;
         
          }
        
          
        `}</style>
      </div>
    );
  }
}

export default RadioSearch;

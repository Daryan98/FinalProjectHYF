import React, { Component } from "react";

class RadioSearch extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   FilterBy: "all"
    // };

    // this.handleChange = this.handleChange.bind(this);

    // console.log({FilterBy: this.state.FilterBy});
  }

  // handleChange = event => {
  //   this.setState({
  //     FilterBy: event.target.value
  //   });
  // };

  render() {
    return (
      <div>
        <form>
          <p>Filter the songs By:</p>

          <ul>
            <li>
              <label>
                <input
                  // checked
                  type="radio"
                  value="all"
                  // checked={this.state.FilterBy === "all"}
                  // onChange={this.handleChange}
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
                  // checked={this.state.FilterBy === "title"}
                  // onChange={this.handleChange}
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
                  // checked={this.state.FilterBy === "artist"}
                  // onChange={this.handleChange}
                  checked={this.props.FilterBy === "artists"}
                  onChange={this.props.handleChange}
                />
                <span>Artist</span>
              </label>
            </li>
            <li>
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
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default RadioSearch;

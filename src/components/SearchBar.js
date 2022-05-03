import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange(event) {
    console.log(event.target.value);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment container">
        <label>Enter something to Search</label>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <input
            type="text"
            value={this.state.term}
            onChange={(e) => {
              this.setState({ term: e.target.value.toUpperCase() });
            }}
          ></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;

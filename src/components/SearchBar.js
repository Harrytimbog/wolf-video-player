import React from "react";
import { Paper, TextField } from "@material-ui/core";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };

  handleChange = (event) => this.setState({ searchTerm: event.target.value });

  handleSubmit = (event) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;
    onFormSubmit(searchTerm);
    event.preventDefault();
  };

  render() {
    return (
      <Paper
        elevation={6}
        style={{
          padding: "16px",
          borderRadius: "12px",
          backgroundColor: "#fafafa",
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            label="Search for videos..."
            onChange={this.handleChange}
            variant="outlined"
          />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;

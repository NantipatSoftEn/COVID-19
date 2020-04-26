import React from "react";

import WithLoading from "../hocs/WithLoading";
class FetchBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch(this.props.api)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          console.log(`error=${error}`);
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const ListWithLoading = WithLoading(this.props.list);
    return (
      <ListWithLoading
        error={this.state.error}
        isLoaded={this.state.isLoaded}
        items={this.state.items}
      />
    );
  }
}

export default FetchBoard;

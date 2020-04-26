import React from "react";
import List from "./List";
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
    fetch("https://covid19.th-stat.com/api/open/cases/sum")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.Province,
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
    const ListWithLoading = WithLoading(List);
    console.log(`items=`,this.state.items);
    
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

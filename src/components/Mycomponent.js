import React from "react";

class MyComponent extends React.Component {
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
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {Object.keys(items).map((key,index) => (
            <li key={index}>
              {key} {items[key]}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default MyComponent;

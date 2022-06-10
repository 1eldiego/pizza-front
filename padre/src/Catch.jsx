import React from "react";

class Catch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hayError: false };
  }

  componentDidCatch() {
    this.setState({ hayError: true });
  }

  render() {
    if (this.state.hayError) {
      return this.props.fallback;
    }

    try {
      return this.props.children;
    } catch (error) {
      return this.props.fallback;
    }
  }
}

export default Catch;

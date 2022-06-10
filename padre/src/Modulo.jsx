import React, { useEffect, useRef } from "react";
import ReactDOM from 'react-dom/client';

class Modulo extends React.Component {
  constructor(props) {
    super(props);
    this.node = React.createRef();
  }

  componentDidMount() {
    const node = this.node.current;
    node.attachShadow({ mode: 'open' });

    React.startTransition(() => {
      ReactDOM.createRoot(node.shadowRoot).render(this.props.children);
    });
  }

  componentWillUnmount() {
    this.node = null;
  }

  render() {
    return (
      <div ref={this.node}>
        <html>
          <head></head>
        </html>
      </div>
    );
  }
};

export default Modulo;

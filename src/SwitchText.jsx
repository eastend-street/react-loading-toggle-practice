import React from "react";

class SwitchText extends React.Component {
  state = {
    isLeft: true
  };

  toggleText = isLeft => {
    this.setState({ isLeft: isLeft });
  };
  render() {
    return (
      <>
        <h1>
          {this.state.isLeft ? "This is left text" : "This is right text"}
        </h1>
        <button onClick={() => this.toggleText(true)}>Show left</button>
        <button onClick={() => this.toggleText(false)}>Show right</button>
      </>
    );
  }
}

export default SwitchText;

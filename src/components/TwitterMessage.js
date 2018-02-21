import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      remainingCharacters: 140
    };
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      value: e.target.value,
      remainingCharacters: 140 - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <p>Remaining Characters: <em>{this.state.remainingCharacters}</em></p>
      </div>
    );
  }
}

export default TwitterMessage;

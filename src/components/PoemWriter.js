import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      error: true
    };
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
    const value = e.target.value
    const splitVal = value.split(/\n/);
    const trimmedVals = splitVal.map((line => {
      const wordCount = line.split(/\s/);
      return wordCount.filter((word) => word.length > 0)
    }))
    const lineLengths = trimmedVals.map((line) => line.length)
    if(lineLengths[0] === 5 && lineLengths[1] === 3 && lineLengths[2] === 5){
      this.setState({error: false})
    } else{
      this.setState({error: true})
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleChange} />

        {this.state.error ? <div id="poem-validation-error" style={{ color: "red" }}>
           'This poem is not written in the right structure!'
        </div> : null}
      </div>
    );
  }
}

export default PoemWriter;

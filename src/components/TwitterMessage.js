import React from "react";

export default class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxChars: this.props.maxChars,
      message: "",
      charsLeft: this.props.maxChars
    };
  }

  getMessage = (e) => {
    e.target.value = e.target.value.slice(0, this.state.maxChars)
    this.setState({
      message: e.target.value,
      charsLeft: this.state.maxChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message ({this.state.charsLeft} chars left):</strong>
        <input type="text" onChange={this.getMessage} name="message" id="message" value={this.state.message}/>
      </div>
    );
  }
}
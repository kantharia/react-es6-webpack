import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = { txt: 'This is the state.'};
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({
      txt:e.target.value
    });
  }

  render() {
    let txt = this.state.txt;
    return (
      <div>
        <Widget txt={this.state.txt} update={this.update} />
      </div>
    );
  }
}

/* Stateless function */
const Widget = (props) => {
  return (
    <div>
      <input type="text" onChange={props.update} />
      <h1>{props.txt}</h1>
    </div>
  );
};

export default App;

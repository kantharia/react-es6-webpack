import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = { txt: 'This is the state.'};
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
        <input type="text" onChange={this.update.bind(this)} />
        <h1>{txt}</h1>
      </div>
    );
  }
}

export default App;

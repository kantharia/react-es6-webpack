import React from 'react';

class App extends React.Component {
  render() {
    let txt = this.props.txt;
    return <h1>{txt}</h1>;
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
  txt: 'This is the default props'
};

export default App;

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      surname: ' ',
      name: ' ',
      thirdname: ' ',
    };
  }
  handleSetSurName = (e) => {
    this.setState({ surname: e.target.value });
  };
  handleSetName = (e) => {
    this.setState({ name: e.target.value });
  };
  handleSetThirdName = (e) => {
    this.setState({ thirdname: e.target.value });
  };

  render() {
    return (
      <div class="App">
        <div class="input">
          <input
            type="text"
            value={this.state.surname}
            onChange={this.handleSetSurName}
          />
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleSetName}
          />
          <input
            type="text"
            value={this.state.thirdname}
            onChange={this.handleSetThirdName}
          />
        </div>
        <div class="output">
          <div className="state-name">{this.state.surname}</div>
          <div className="state-name">{this.state.name}</div>
          <div className="state-name">{this.state.thirdname}</div>
        </div>
      </div>
    );
  }
}
export default App;

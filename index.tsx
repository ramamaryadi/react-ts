import React, { Component } from 'react';
import { render } from 'react-dom';
import Topbar from './components/topbar';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        {/* <Topbar /> */}
        <Hello name={this.state.name} />
        <p>Yok Ngoding! :)</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

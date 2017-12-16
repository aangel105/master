const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  constructor() {
    super();
    this.fontSizes = ["small", "medium", "large"];
    this.state = {
      fontSize: "medium" 
    };
  }
  handleChange = e => {
    this.setState({
      fontSize: e.target.value
    });
  }
  render() {
    let fontSize = {};
    if (this.state.fontSize === 'small') {
      fontSize.fontSize = '8px';
    }
    if (this.state.fontSize === 'medium') {
      fontSize.fontSize = '14px';
    }
    if (this.state.fontSize === 'large') {
      fontSize.fontSize = '20px';
    }
    return (
      <div>
        {this.fontSizes.map(s => <div>
          <input
            type="radio"
            value={s}
            checked={this.state.fontSize === s}
            onChange={this.handleChange} />{s}</div>)}
        <pre style={fontSize}>{`
      Self Confident Poem
      by Cody Hess

      hi i am a huge poem
      i have so many lines of text
      i do not use this.props like a
        NERD LOSER POEM
      i use backticks!
      can you make good duck noises?
      i bet you cannot make better duck noises
        THAN ME
      quack
        QUACK!
      quackquack QUACK
        quackTASTIC

      - kthxbai
      `}</pre>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));
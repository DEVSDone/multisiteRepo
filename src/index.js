import React from 'react';
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
const style = {
  margin: 12,
};
const App = () => (
  <MuiThemeProvider>
  <div>Hello</div>
  <RaisedButton label="Primary" primary={true} style={style} />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Flexboxgrid from "flexboxgrid";
import SitePane from "./components/sitepane.js";



const App = () => (
  <MuiThemeProvider>
    <SitePane/>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));

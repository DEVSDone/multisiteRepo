import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Flexboxgrid from "flexboxgrid";
import SitePane from "./components/sitepane.js";
import "./styles.css";

const App = () => (
  <MuiThemeProvider>
    <div className="row center-xs parent">
      <div className="col-xs parent border"><SitePane /></div>
      <div className="col-xs parent border"><SitePane /></div>
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));

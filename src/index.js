import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Flexboxgrid from "flexboxgrid";
import SitePane from "./components/sitepane.js";
import AdderToolbar from "./components/addertoolbar.js";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { currentGrid: [] };
  }
  addrGridItem() {
    let { currentGrid } = this.state;
    currentGrid.push(<div className="col-xs parent border"><SitePane /></div>);
    this.setState({ currentGrid });
  }
  render() {
    return (
      <MuiThemeProvider>
        <AdderToolbar />
        <div className="row center-xs parent">
          {this.state.currentGrid}
        </div>
      </MuiThemeProvider>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

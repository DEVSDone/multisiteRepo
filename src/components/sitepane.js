import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
const style = {
  margin: 12,
};

class SitePane extends React.Component{
  render (){
    return <div>
      <TextField
        hintText="Enter URL here"
      />
      <RaisedButton label="Go" primary={true} style={style} /></div>
  }
}

export default SitePane;
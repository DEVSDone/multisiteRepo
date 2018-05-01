import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
const style = {
  margin: 12,
};

class SitePane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {url:"",selectedURL:""};
    this.handleChange = this.handleChange.bind(this);
    this.setSelectedURL = this.setSelectedURL.bind(this);
  }
  handleChange = (event) => {
    this.setState({
      url: event.target.value,
    });
  };
  setSelectedURL(){
    let { url} = this.state;
    if (url){
      this.setState({ selectedURL:url})
    }else{
      alert("Input URL first...")
    }
  }
  render() {
    return <div className="parent">
      <TextField
        value={this.state.url}
        onChange={this.handleChange}
        hintText="Enter URL here"
      />
      <RaisedButton label="Go"
        primary={true}
        onClick = {this.setSelectedURL}
        style={style}
      />
      <iframe src={this.state.selectedURL}
       height="100%"
      width="100%"
      />
    </div>
  }
}

export default SitePane;
import React from 'react';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginRight: 20,
};
class AdderToolbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="row end-xs">
      <div className="col-xs pad10TopBot">
        <FloatingActionButton secondary={true} mini={true} style={style} onClick={this.props.onAdd}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    </div>
  }
}

export default AdderToolbar;
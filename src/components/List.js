import React from "react";


class List extends React.Component {
  constructor(props) {
    super(props);
    //props.parentState.val = 'enter text';

    this.handleList = this.handleList.bind(this);
  }

  handleList(event) {
    // console.log(this.props.parentState.val);
    let obj = {};
   obj[this.props.type] = event.target.value;
    this.props.runProcess(obj);
    // this.props.parentState.setState({val: event.target.value});
  }
  render() {
    let  types  = this.props.data;
    
    return (
      <div className="save">
        <h3>{this.props.type}</h3>
        <select onChange = {this.handleList}>
          {types.map(type => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default List;

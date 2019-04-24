import React from "react";


class Line extends React.Component {
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
    let  questions  = this.props.data;
   // questions = ['a', 'b', 'c'];
    
    return (
      <div className="save">
      <ul>
       {
           questions.map((question, index) =>(
            <li key = {index}>{question.statement} </li>
           ))
       }
       </ul>
      </div>
    );
  }
}

export default Line;

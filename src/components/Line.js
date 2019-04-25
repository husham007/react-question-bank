import React from "react";

class Line extends React.Component {
  constructor(props) {
    super(props);
    //props.parentState.val = 'enter text';

    this.handleList = this.handleList.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleList(event) {
    // console.log(this.props.parentState.val);
    let obj = {};
    obj[this.props.type] = event.target.value;
    this.props.runProcess(obj);
    // this.props.parentState.setState({val: event.target.value});
  }

  handleDelete(event) {
    this.props.deleteHandler(event.target.value);
  }

  handleEdit(event) {
    this.props.editHandler(event.target.value);
  }

  render() {
    let questions = this.props.data;
    // questions = ['a', 'b', 'c'];

    return (
      <div className="save">
        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              {`${question.statement},  ${question.type},  ${
                question.category
              }`}{" "}
              <button value={question.statement} onClick={this.handleDelete}>
                {" "}
                Delete{" "}
              </button>{" "}

              <button value={question.statement} onClick={this.handleEdit}>
                {" "}
                Edit{" "}
              </button>{" "}


            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Line;

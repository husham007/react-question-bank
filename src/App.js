import React from "react";
import questions from "./data/questions.js";
import Statement from "./components/Statement.js";
import Save from "./components/Save";
import List from "./components/List";
import Line from "./components/Line";
//import logo from './logo.svg';
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: questions.questions,
      statement: "",
      type: "general",
      category: "short"
    };

    this.stateHandler = this.stateHandler.bind(this);
    this.save = this.save.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.editHandler = this.editHandler.bind(this);
    //console.log(this.state);
  }

  stateHandler(val) {
    this.setState(val);
  }

  save() {
    //console.log(questions.questions);
    if (this.state.editMode !== undefined){
      console.log('edit mode');
      questions.questions[this.state.editMode].statement = this.state.statement;
      questions.questions[this.state.editMode].type = this.state.type;
      questions.questions[this.state.editMode].category= this.state.category;

      this.setState({
        questions: questions.questions,
        statement: "",
        type: "short",
        category: "general"
      });

      delete this.state['editMode'];
    }

    else {

      this.setState({
        questions: questions.questions.push({
          statement: this.state.statement,
          type: this.state.type,
          category: this.state.category
        }),
        statement: "",
        type: "short",
        category: "general"
      });

    }

   
  }

  deleteHandler(statement) {
    let index = questions.questions.findIndex(question => {
      return question.statement === statement;
    });

    ///console.log(index);

    questions.questions.splice(index, 1);
    console.log(questions.questions);

    this.setState({
      question: questions.questions
    });
  }

  editHandler(statement) {
    let index = questions.questions.findIndex(question => {
      return question.statement === statement;
    });

    this.setState({
      statement: questions.questions[index].statement,
      type: questions.questions[index].type,
      category: questions.questions[index].category,
      editMode: index
    });
  }
  /*
    this.setState((state, props)=>{
      state.questions = questions.questions.push({
        statement: this.state.statement,
        type: this.state.type,
        category: this.state.category 
      });
    });     */

  //this.setState({id: 3});
  //console.log(this.state.questions);

  /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */

  render() {
    return (
      <div>
        <h1>Question Bank</h1>
        <Line
          data={questions.questions}
          state={this.state}
          deleteHandler={this.deleteHandler}
          editHandler = {this.editHandler}
        />
        <Statement
          stateHandler={this.stateHandler}
          type="statement"
          state={this.state}
        />
        <List
          runProcess={this.stateHandler}
          type="category"
          data={questions.categories}
          state={this.state}
        />
        <List
          runProcess={this.stateHandler}
          type="type"
          data={questions.types}
          state={this.state}
        />
        <Save buttonText="Save" runProcess={this.save} state={this.state} />
      </div>
    );
  }
}

export default App;

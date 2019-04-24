import React from 'react';
import questions from './data/questions.js'
import Statement from './components/Statement.js';
import Save from './components/Save';
import List from './components/List';
import Line from './components/Line';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component{

  constructor(){
    super();
    this.state = {statement: 'enter text from parent'};

    this.stateHandler = this.stateHandler.bind(this);
    this.save = this.save.bind(this);
  }

  stateHandler(val){
   this.setState (val);
  }

  save (){
    questions.questions.push(this.state);
    //console.log(questions);
  }

  
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
 
 render(){
  return (
    <div>
     <h1>Question Bank</h1>
     <Line data = {questions.questions}/>
    <Statement stateHandler = {this.stateHandler} type = 'statement'/>
    <List runProcess = {this.stateHandler} type = 'category' data = {questions.categories}/>
    <List runProcess = {this.stateHandler} type = 'types' data = {questions.types}/>
    <Save buttonText = 'Save' runProcess = {this.save}/>
    
    </div>
  );
 }
}


 




export default App;

import React from 'react';
import questions from '../data/questions';


class Save extends React.Component{
constructor(props){
    super(props);
    //props.parentState.val = 'enter text';

this.handleSave = this.handleSave.bind(this);

}

handleSave(event) {
   // console.log(this.props.parentState.val);
    this.props.runProcess();
   // this.props.parentState.setState({val: event.target.value});
  }
    render(){
        return (
            <div className = 'save'>
                <button onClick= {this.handleSave}>{this.props.buttonText}</button>
            </div>
        );
    }
}


export default Save;
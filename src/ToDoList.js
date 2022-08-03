import { Component } from "react";
import daily from './daily.jpg';

export class ToDoList extends Component {
    state = {
       userInput: "",
       list: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
        //console.log(e);
    }

    addItem(input) {
        if (input === '') {
            alert ("Пожалуйста, добавьте дело")
        } else {
        let listArray = this.state.list;
        listArray.push(input);
        this.setState({list: listArray, userInput: ''})
        console.log(listArray);
        }
    }

    deleteItem() {
        let listArray = this.state.list;
        listArray = [];
        this.setState({list: listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>    
             <div className="container">
                <input type="text" 
                placeholder="Дела на сегодня..."
                onChange={(e) => {this.onChangeEvent(e.target.value)}} 
                value={this.state.userInput} />
             </div>
             <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Добавить</button>
             </div>
             <ul>
                {this.state.list.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}>
                    <img src ={daily} width="40px"/> 
                    {item}</li>
                ))}
             </ul>
             <div className="container">
                <button onClick={() => this.deleteItem()} className="btn delete">Удалить</button>
             </div>
            </form>
            </div>
        )
    }
}
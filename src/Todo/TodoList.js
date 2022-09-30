import React, { Component } from "react";

class TodoList extends Component {

    constructor() {
        super();
        this.state= {
            user_imput: '',
            items: []
        }
    }

    onChange(event){
       this.setState({
          user_imput: event.target.value
        });
    }

    addTodo(event){
        event.preventDefault();
        this.setState({
            user_imput :'',
            items : [...this.state.items, this.state.user_imput]
        })
    }

    deleteTodo(item){
        const array= this.state.items;
        const index = array.indexOf(item);
        array.splice(index,1);
        this.setState({
            items : array
        });

    }

    renderTodos(){
        return this.state.items.map((item) => {
            return (
                <div key={item}>
                    {item} | <button onClick={this.deleteTodo.bind(this, item)}>X</button>
                </div>
            )
        })
    }




    render(){
        return (
            <div>
                <h1>My To do List</h1>
            <form>
                <input value={this.state.user_imput} 
                type="text" 
                placeholder="Renseignez un item"
                onChange={this.onChange.bind(this)}
                />
                <button onClick={this.addTodo.bind(this)}>Ajouter</button>
            </form>
            <div>
                {this.renderTodos()}
            </div>
            </div>
        );
    }

}
export default TodoList;
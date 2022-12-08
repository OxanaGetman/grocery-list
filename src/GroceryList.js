import { Component } from 'react';
import icon from './icon.png';

export class GroceryList extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            groceryList: []
        }
    }
    
    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input === '') {
            alert ('Пожалуйста, напишите, что вы хотите купить...')
        } 
        
        else {
            let listArray = this.state.groceryList;
            listArray.push(input);
            this.setState({groceryList: listArray, userInput:''})
        }
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="container">
                        <input type='text' placeholder='Что вы хотите купить...' 
                        onChange={(e) => {this.onChangeEvent (e.target.value)}}
                        value={this.state.userInput}/>
                    </div>
                        <div className="container">
                            <button className="btn btn-add" onClick={() => this.addItem(this.state.userInput)}>ДОБАВИТЬ</button>
                        </div>
                    <div>
                            <ul>
                                {this.state.groceryList.map((item, index) => 
                                    <li onClick={this.crossedWord} key={index}> <img src={icon} width='20px' alt='pic'/> {item}</li>)}
                            </ul>
                        <div className="container">
                            <button className="btn btn-del" onClick={() => this.deleteItem()}>УДАЛИТЬ</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
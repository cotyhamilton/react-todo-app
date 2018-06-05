import React, { Component } from 'react';
import './TodoList.css';
import Form from './Form';
import Item from './Item';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            nextId: 0
        };
        this.handleSave = this.handleSave.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    handleSave(item) {
        const newItem = { item: item, id: this.state.nextId };
        const items = [...this.state.items, newItem];
        this.setState((prevState, props) => {
            return {
                items: items,
                nextId: prevState.nextId + 1
            }
        });
    }

    deleteItem(id) {
        const newList = this.state.items.filter(i => i.id !== id);
        this.setState({items: newList});
    }

    render() {
        const items = this.state.items.map(i => (
            <Item key={i.id} item={i} onDelete={this.deleteItem} />
        ));
        return (
            <div className="Container">
                <header className="title">
                    <h1>Simple Todo App</h1>
                </header>
                <div className="list">
                    <ul>
                        {items}
                        <div className="list-item add-item-button">
                            <Form onSave={this.handleSave} />
                            +
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

export default TodoList;
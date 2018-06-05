import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
    static defaultProps = {
        onDelete() { }
    }

    constructor(props) {
        super(props);
        this.itemClicked = this.itemClicked.bind(this);
    }

    itemClicked() {
        this.props.onDelete(this.props.item.id);
    }

    render() {
        return (
            <div className="list-item" onClick={this.itemClicked}>
                <li>{this.props.item.item}</li>
                <span className="deleteButton">x</span>
            </div>
        );
    }
}

export default Item;
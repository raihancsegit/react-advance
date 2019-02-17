import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing:false,
        }
        this.renderFrom = this.renderFrom.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.toggleState = this.toggleState.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }
    toggleState() {
        const { isEditing } = this.state;
        this.setState({
            isEditing:!isEditing
        })
    }
    updateItem(evt) {
        evt.preventDefault();
        this.props.editTask(this.props.index, this.input.value);
        this.toggleState();
    }
    renderItem() {
        return (
            <li onClick={() => { this.props.clickHandler(this.props.index); }}
                    className={this.props.detail.completed ? 'completed' : ''}>{this.props.detail.name}
                    <button onClick={(evt) => { evt.stopPropagation(); this.props.deleteTask(this.props.index); }}>delete</button>
                    <button onClick={(evt) => { evt.stopPropagation(); this.toggleState() }}>Edit Item</button>
                </li>
        )
    }
    renderFrom() {
        return (
            <form onSubmit={this.updateItem}> 
                <input ref={(value) => {
                    this.input = value
                }} type="text" defaultValue={this.props.detail.name}/>
                    <button type="submit">Update Item</button>
                </form> 
        )
    }
    render() {
        const { isEditing } = this.state;
        return (
            <section>
                {
                    isEditing ? this.renderFrom() : this.renderItem()
                }
                
                
                
            </section>
        
        )
    }
}

export default TodoItem;
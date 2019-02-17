import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './Components/TodoItem.js'
import TodoForm from './Components/TodoForm.js'
import './index.css';
class TodoList extends React.Component {
    constructor() {
        super();
        this.changeStatus = this.changeStatus.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.state = {
            tasks: [
                
                {
                    name: "Buy Milk",
                    completed:false
                },
                {
                    name: "Buy Cheese",
                    completed:false
                },

                {
                    name: "Buy Bread",
                    completed:false
                }
            
            ],
            currentTask:''
        }
    }
    editTask(index,newValue) {
        var tasks = this.state.tasks;
        var task = tasks[index];
        task['name'] = newValue;
        this.setState({
            tasks
        })
    }
    deleteTask(index){
        console.log(index);
        let tasks = this.state.tasks;
        tasks.splice(index, 1);
        this.setState({
            tasks
        })
    }
    addTask(evt) {
        evt.preventDefault();
        let tasks = this.state.tasks;
        let currentTask = this.state.currentTask;
        tasks.push({
            name: currentTask,
            completed:false
        })
        this.setState({
            tasks:tasks
        })
    }
    updateTask(newValue) {
        console.log(newValue);
        this.setState({
            currentTask: newValue.target.value
        })
    }
    changeStatus(index) {
        //console.log(this.state.tasks[index]);

        var tasks = this.state.tasks;
        var task = tasks[index];
        task.completed = !task.completed;
        this.setState({
            tasks
        })
    }
    render() {
        return (
            <section>
                <TodoForm
                    currentTask={this.state.currentTask}
                    updateTask={this.updateTask}
                    addTask={this.addTask}
                    

                />
                <ul>
                    {
                        this.state.tasks.map((task,index) => {
                            return <TodoItem
                                key={index}
                                index={index}
                                clickHandler={this.changeStatus}
                                detail={task}
                                deleteTask={this.deleteTask}
                                editTask={this.editTask}
                            />
                        })
                    }
                    
                    </ul>
                </section>
        )
    }
}





ReactDOM.render(<TodoList/>, document.getElementById('root'));


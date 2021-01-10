import React from 'react';
import ToDoList from './ToDoList';
import NavBar from './NavBar';
import AddTask from './AddTask';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Devtools from "mobx-react-devtools";
// import initialData from '../initialData';
// import uniqueid from 'uniqueid';
// import Fetching from './Fetching';

class App extends React.Component {

    // state = {
    //     tasks: [],
    //     fetching: true
    // }

    // componentDidMount = () => {
    //     let delay = Math.floor(Math.random() * 5000)

    //     setTimeout(() => {
    //         this.setState({
    //             fetching: false,
    //             tasks: initialData
    //         })
    //     } , delay)
    // }

    // onToggleCompleted = (taskId) => {
    //     let taskToUpdate = this.state.tasks.find(task => task.id === taskId)
    //     taskToUpdate.completed = !taskToUpdate.completed

    //     this.setState(prevState => (
    //         prevState.tasks.map(task => {
    //             return task.id === taskId ? taskToUpdate : task
    //         })
    //     ))
    // }

    // onAddTask = (newTaskName) => {
    //     let newTask = {
    //         id: uniqueid(),
    //         name: newTaskName,
    //         completed: false
    //     }

    //     this.setState(prevState => ({
    //         tasks: [...prevState.tasks, newTask]
    //     }))
    // }

    // onDeleteCompleted = () => {
    //     this.setState(prevState => {
    //         let newState = prevState.tasks.filter(task => !task.completed)
    //         return {
    //             tasks: newState
    //         }
    //     })
    // }

    // shouldComponentUpdate = () => {
    //     console.log('Bonjour de shouldComponentUpdate')
    //     return true
    // }

    // componentDidMount = () => {
    //     console.log('Bonjour de componentDidMount')
    // }

    // componentDidUpdate = () => {
    //     console.log('Bonjour de componentDidUpdate')
    // }

    // getSnapshotBeforeUpdate = () => {
    //     console.log('Bonjour de getSnapshotBeforeUpdate')
    // }



    render() {
        // console.log('Bonjour de render')

        return (
            <section id="todo">
                <Devtools></Devtools>
                {/* {this.state.fetching? <Fetching /> : null} */}
                <BrowserRouter>
                    <Switch>
                        <Route path="/add-task" component={AddTask} />
                        <Route path="/:filter?" component={ToDoList} />
                    </Switch>
                    <NavBar onDeleteCompleted={this.onDeleteCompleted} />

                </BrowserRouter>
            </section>
        )
    }
}

export default App
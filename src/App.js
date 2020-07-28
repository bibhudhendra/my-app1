import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinjas from './AddNinja'

class App extends Component {

    state = {
        ninjas: [
            {name: 'Ryu', age: 30, belt: 'Black', id: 1},
            {name: 'Yoshi', age: 20, belt: 'Green', id: 2},
            {name: 'Crystal', age: 25, belt: 'Pink', id: 3}
        ]
    }
    addNinja = (ninja) => {
        ninja.id = Math.random();
        let ninjas = [...this.state.ninjas, ninja]
        this.setState({
            ninjas: ninjas
        })
    }
    deleteNinja = (id) => {
        let ninjas = this.state.ninjas.filter(ninja => {
            if(ninja.id === id)
                return false;
            else 
                return true;
        });
        this.setState({
            ninjas: ninjas
        })
    }
    render() {
        return (
            <div className = "App">
                <h1>My first React app!</h1>
                <p>Wel come :)</p>
                <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
                <AddNinjas addNinja={this.addNinja}/>
            </div>
        )
    }
}

export default App;

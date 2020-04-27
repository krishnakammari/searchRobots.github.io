import React, { Component } from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './searchBox';


class App extends Component{
    constructor() {
        super()
        this.state={ 
            robots:robots,
            searchfield:''
        }
    }
    onSearchChange=(event) =>{
       this.setState({searchfield:event.target.value})
       
       
    }
    render(){
        const filterrobots=this.state.robots.filter(robots=>{
            return robots.place.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

    return(
        <div className='tc'>
            <h1>robo search</h1>
            
            <SearchBox searchChange={this.onSearchChange}/>
            
            <CardList robots={filterrobots}/>
        </div>
        
    );
    }
}
export default App;
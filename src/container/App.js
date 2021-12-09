import React, {Component} from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import './App.css';

class App extends Component {
    constructor (){
        super();
        this.state ={
            robots:[],
            searchfield:''
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.cypress.io/users')
        .then(response => response.json())
        .then(users=>this.setState({robots:users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield:event.target.value});
    }

    render () {
        console.log('render');
        const filteredRobots=this.state.robots.filter((robot) => {
            return robot.name.toUpperCase().includes(this.state.searchfield.toUpperCase());
        });
        if (this.state.robots.length===0){
            return <h1>Loading....</h1>
        }
        else {
            return (
                    <div className='tc'>
                        <h1 className='f1'>Robo Friends</h1>
                        <SearchBox searchfield={this.onSearchChange}/>
                        <Scroll>
                            <ErrorBoundary>
                                <CardList robots={filteredRobots}/>
                            </ErrorBoundary>
                        </Scroll>
                    </div>
            );
        }
    }
};

export default App;
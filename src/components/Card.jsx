import React, { Component } from 'react'
import axios from 'axios';
import Pokemon from './Pokemon'

class Card extends Component {
  // mount example
  constructor(props){
    super(props);
    this.state = { pokemons: [], id: 0 }
  }
  // mount example
  componentDidMount(){
    axios.get('https://pokeapi.co/api/v2/pokemon/').then(res => this.setState({ pokemons: res.data.results })).catch(error => {throw new Error('something went wrong')});
    console.log('mount')
  }
  // update/mount example
  render() {
    /* const {pokemon} = this.state; */
    const handleNext = () => {
      if(this.state.id >= 0 && this.state.id < 20){
        if(this.state.id >= 19){
          this.setState({ id: 0 });
          return;
        }
        this.setState({ id: this.state.id+1 });
        
      }
    }
    const handlePrev = () => {
      if(this.state.id >= 0 && this.state.id < 20){
        if(this.state.id <= 0){
          this.setState({id: 19});
          return;
        }
        this.setState({id: this.state.id-1});
      }
    }
    return (
      <div className='container'>
          <h1>Pokemon:</h1>
          <div className='item'>
            {this.state.pokemons.length > 0 && <Pokemon key={this.state.id} pokemons={this.state.pokemons} id={this.state.id} />}
          </div>
          <div className='item'>
            <button className='btn' onClick={handlePrev}>Prev</button>
            <button className='btn' onClick={handleNext}>Next</button>
          </div>
          
      </div>
    )
  }
}

export default Card;

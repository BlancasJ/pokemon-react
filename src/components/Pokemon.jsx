import React, { Component } from 'react'
import axios from 'axios'

class Pokemon extends Component {
  constructor(props){
    super(props);
    this.state = { img: '' }
  }
  //mount example
  componentDidMount(){
    axios.get(this.props.pokemons[this.props.id].url).then(res => this.setState({img: res.data.sprites.back_default}));
  }
  // unmount example
  componentWillUnmount(){
    /* alert('The component is going to be unmounted'); */
    this.setState({img: ''});
  }
  // update/mount example
  render() {
    // the error below is to fake an error and test ErrorBoundary class
    //throw new Error('error')
    /* console.log(this.state.img); */
    return (
      <React.Fragment>
        <img src={this.state.img} alt={this.props.pokemons[this.props.id].name} />
        <h3>{this.props.pokemons[this.props.id].name}</h3>
      </React.Fragment>
    )
  }
}

export default Pokemon;

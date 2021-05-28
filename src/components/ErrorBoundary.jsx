import React, { Component } from 'react'

class ErrorBoundary extends Component {
  // mount example
  constructor(props){
    super(props);
    this.state = {hasError: false}
  }
  // error example
  static getDerivedStateFromError(){
    return {
      hasError: true
    }
  }

  render() {
    if(this.state.hasError){
      console.log('Some error')
      return <h1>Some Error</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

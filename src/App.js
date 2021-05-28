import Card from './components/Card'
import './App.css';
import ErrorBoundary from './components/ErrorBoundary'

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="App App-header">
        <ErrorBoundary >
          <Card />
        </ErrorBoundary>
      </div>
    )
  }
}

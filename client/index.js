import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'
import store from './store'
// import { BrowserRouter as Router } from 'react-router-dom'



document.addEventListener('DOMContentLoaded', () => {
  render(
  
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>
  , 
  document.getElementById('app'))
})

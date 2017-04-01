import React, {Component} from 'react';
import TopBar from './components/TopBar'
import Footer from './components/footer/Footer'
import styled from 'styled-components'

const App = ({pathname, children}) => (
  <div>
    <TopBar pathname={pathname}/> {children}
    <Footer/>
  </div>
)

App.propTypes = {
  pathname: React.PropTypes.string.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
}

export default App

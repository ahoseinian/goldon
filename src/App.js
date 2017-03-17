import React, {Component} from 'react';
import TopBar from './components/TopBar'
import Footer from './components/footer/Footer'
import styled from 'styled-components'

const AppContainer = styled.div `
`

class App extends Component {
  render() {
    const {children, location} = this.props
    return (
      <AppContainer>
        <TopBar location={location}/> {children}
        <Footer/>
      </AppContainer>
    );
  }
}

export default App

import React, {Component} from 'react';
import PageHead from './components/PageHead'
import TopBar from './components/TopBar'
import styled from 'styled-components'

const AppContainer = styled.div `
  padding-top: 3.5rem;
`

class App extends Component {
  render() {
    const {children, location} = this.props
    return (
      <AppContainer>
        <TopBar location={location}/>
        <PageHead/>
        <div>
          {children}
        </div>
      </AppContainer>
    );
  }
}

export default App

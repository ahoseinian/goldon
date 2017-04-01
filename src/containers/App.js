import React from 'react';
import TopBar from '../components/TopBar'
import Footer from '../components/footer/Footer'

const App = ({location, children}) => (
  <div>
    <TopBar pathname={location.pathname}/> {children}
    <Footer/>
  </div>
)

App.propTypes = {
  location: React.PropTypes.object.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
}

export default App

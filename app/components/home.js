import React from 'react'
import {Navbar} from './navbar'

const Home = (props) => {

  return (
    <div>
      <Navbar />
      { props.children }
    </div>
  )
}
export default Home

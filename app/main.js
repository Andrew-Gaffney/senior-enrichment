'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {Router, Route, browserHistory, IndexRedirect} from 'react-router'
import Home from './components/home'
import Students from './components/Students'
import Student from './components/Student'
import Campus from './components/Campus'
import Campuses from './components/Campuses'
import addStudent from './components/addStudent'
import addCampus from './components/addCampus'
import {fetchCampuses} from './redux/campuses'
import {fetchUsers} from './redux/users'


const Routes = ({fetchInitialData}) => {
  return (
    <Router history = {browserHistory}>
      <Route path = "/" component = {Home} onEnter = {fetchInitialData}>
        <IndexRedirect to = "/campuses" />
        <Route path = "campuses" component = {Campuses} />
        <Route path ="campuses/:campusName" component = {Campus} />
        <Route path ="addCampus" component = {addCampus} />
        <Route path = "students" component = {Students} />
        <Route path = "addStudent" component = {addStudent} />
        <Route path ="students/:id" component = {Student} />
      </Route>
    </Router>
  )
}


const mapProps = null

const mapDispatch = dispatch => {
  return {
    fetchInitialData: function() {
      dispatch(fetchUsers());
      dispatch(fetchCampuses());
    }
  }
}

export default connect(mapProps, mapDispatch)(Routes)

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, browserHistory} from 'react-router'
import {removeUser} from '../redux/users'


const Students = ({students, campuses, handleDelete}) => {
  return (
    <div>
      <div>
        <Link to="/addStudent">
          <button>Add a Student</button>
        </Link>
        </div>
      <hr />
      <label>All Students</label>
      <ul>
        { students.length ?
         students.map(student => {
           const relevantCampus = campuses.find(campus => {
             return campus.id === student.campusId
           })
           return (
             <div key = {student.id}>
              <Link to={`/students/${student.id}`}>
              <li>{`${student.name} at ${relevantCampus.name} Campus`}</li>
             </Link>
              <form onSubmit={handleDelete}>
                <button name="delete"type="submit" value= {student.id}>Delete Student</button>
              </form>
             </div>
           )
         })
         : null
       }
      </ul>
  </div>
  )

}


const mapState = (state) => {
  return {
    students: state.users,
    campuses: state.campuses
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleDelete: function(event) {
      dispatch(removeUser(event.target.delete.value))
    }
  }
}
export default connect(mapState, mapDispatch)(Students)

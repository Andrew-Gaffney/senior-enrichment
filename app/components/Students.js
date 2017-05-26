import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {removeUser} from '../redux/users'

const listStyle = {
  listStyleType: 'none',
  fontSize: '24px'
}

const Students = ({students, campuses, handleDelete}) => {
  return (
    <div>
      <h4>All Students</h4>
      <ul style= {listStyle}>
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
                <button className="btn btn-danger btn-xs" name="delete"type="submit" value= {student.id}>Delete</button>
              </form>
              <hr className ="col-lg-12" />
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

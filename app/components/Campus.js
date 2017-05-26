import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {updateCampus} from '../redux/campuses'
import {removeUser} from '../redux/users'

const Campus = ({name, students, handleEdit, handleDelete}) => {
  return (
    <div>
      <h3>{`${name} Campus`}</h3>
      <ul>
      { students.length ?
        students.map(student => {
          return (
            <div key= {student.id}>
              <Link to ={`students/${student.id}`}>
                <li>{student.name}</li>
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
      <div>
        <h3>Edit Campus Info</h3>
        <form onSubmit = {handleEdit}>
          <div>
            <label className= "control-label">Name</label>
            <input name="newName"className = "form-control" type = "text" />
          </div>
          <div>
            <label className= "control-label">Image Source</label>
            <input name="image"className = "form-control" type = "text" />
          </div>
          <div>
            <button
              name="name"
              value={name}
              type="submit"
              className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
  </div>
  )
}

const mapState = (state, ownProps) => {
  let getCampus = function(campus) {
    return campus.name === ownProps.params.campusName
  }
  let selectedCampus = state.campuses.find(getCampus)
  let relevantStudents = state.users.filter(student => {
    return student.campusId === selectedCampus.id
  })
  return {
    name: ownProps.params.campusName,
    students: relevantStudents
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleEdit: function(event) {
      dispatch(updateCampus(event.target.name.value, event.target.newName.value, event.target.image.value))
    },
    handleDelete: function(event) {
      dispatch(removeUser(event.target.delete.value))
    }
  }
}

export default connect(mapState, mapDispatch)(Campus)

import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {updateUser} from '../redux/users'

const Student = ({student, campuses, campus, handleEdit}) => {

  return student ? (
    <div>
      <h3>{student.name}</h3>
      <h3>{student.email}</h3>
      <Link to = {`/campuses/${campus.name}`}>
        <h3>{campus.name}</h3>
      </Link>
      <hr />
      <div>
        <h3>Edit Campus Info</h3>
        <form onSubmit = {handleEdit}>
          <div>
            <label className= "control-label">Name</label>
            <input name="newName"className = "form-control" type = "text" />
          </div>
          <div>
            <label className= "control-label">Email</label>
            <input name="email"className = "form-control" type = "text" />
          </div>
          <select name="campusId">
          {
            campuses.map(campus => {
              return (
                <option key = {campus.id} value={campus.id}>{campus.name}</option>
              )
            })
          }
          </select>
          <div>
            <button
              name="id"
              value={student.id}
              type="submit"
              className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
  : null
}

const mapState = (state, ownProps) => {
  const selectedStudent = state.users.find(student => {
    return student.id === parseInt(ownProps.params.id)
  })
  const campus = state.campuses.find(campus => {
    return campus.id === selectedStudent.campusId
  })
  return {
    student: selectedStudent,
    campuses: state.campuses,
    campus: campus
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleEdit: function(event) {
      console.log(event.target)
      dispatch(updateUser(event.target.id.value, event.target.newName.value,
        event.target.email.value, event.target.campusId.value))
    }
  }
}

export default connect(mapState, mapDispatch)(Student)

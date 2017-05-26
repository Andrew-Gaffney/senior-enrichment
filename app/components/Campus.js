import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {updateCampus} from '../redux/campuses'
import {removeUser} from '../redux/users'

const listStyle = {
  listStyleType: 'none',
  fontSize: '24px'
}

const Campus = ({name, students, handleEdit, handleDelete}) => {
  return (
    <div>
      <h2>{`${name} Campus`}</h2>
      <ul style={listStyle}>
      { students.length ?
        students.map(student => {
          return (
            <div key= {student.id}>
              <Link to ={`students/${student.id}`}>
                <li>{student.name}</li>
              </Link>
              <form onSubmit={handleDelete}>
                <button
                  className ="btn btn-danger btn-xs"
                  name="delete"type="submit" value= {student.id}>Delete</button>
              </form>
            </div>
          )
        })
        : null
      }
      </ul>
      <div>
        <form onSubmit = {handleEdit}>
          <h4>Edit Campus Info</h4>
          <div className = "form-group col-lg-7">
            <label className= "control-label">Name</label>
            <input name="newName"className = "form-control" type = "text" />
          </div>
          <div className="form-group col-lg-7">
            <label className= "control-label">Image Source</label>
            <input name="image"className = "form-control" type = "text" />
          </div>
          <div className="col-lg-7">
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

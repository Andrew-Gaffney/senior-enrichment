import React from 'react'
import {connect} from 'react-redux'
import {addUser} from '../redux/users'

const addStudent = ({campuses, handleSubmit}) => {
  return (
    <div>
      <h3>Add a Student</h3>
      <form onSubmit = {handleSubmit}>
        <div className="form-group col-lg-7">
          <label className= "control-label">Name</label>
          <input name="name"className = "form-control" type = "text" />
        </div>
        <div className="form-group col-lg-7">
          <label className= "control-label">Email</label>
          <input name="email"className = "form-control" type = "text" />
        </div>
        <select className="col-lg-7" name="campusId">
        {
          campuses.map(campus => {
            return (
              <option key = {campus.id} value={campus.id}>{campus.name}</option>
            )
          })
        }
        </select>
          <hr className= "col-lg-12" />
          <div className="col-lg-7">
            <button
              type="submit"
              className="btn">
              Submit
            </button>
          </div>
      </form>
    </div>
  )
}

const mapState = (state) => {
  return {
    campuses: state.campuses
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit: function(event) {
      dispatch(addUser(event.target.name.value, event.target.email.value, event.target.campusId.value))
    }
  }
}

export default connect(mapState, mapDispatch)(addStudent)

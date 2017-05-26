import React from 'react'
import {connect} from 'react-redux'
import {newCampus} from '../redux/campuses'
import {browserHistory} from 'react-router'

const addCampus = ({handleSubmit}) => {
  return (
    <div>
      <h3>Add a Student</h3>
      <form onSubmit = {handleSubmit}>
        <div>
          <label className= "control-label">Name</label>
          <input name="name"className = "form-control" type = "text" />
        </div>
        <div>
          <label className= "control-label">Image Source</label>
          <input name="image"className = "form-control" type = "text" />
        </div>
        <div>
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

const mapDispatch = (dispatch) => {
  return {
    handleSubmit: function(event) {
      dispatch(newCampus(event.target.name.value, event.target.image.value))
    }
  }
}

export default connect(null, mapDispatch)(addCampus)

import React from 'react'
import {connect} from 'react-redux'
import {newCampus} from '../redux/campuses'

const addCampus = ({handleSubmit}) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <h3>Add a Campus</h3>
        <form onSubmit = {handleSubmit}>
          <div className="form-group col-lg-7">
            <label className= "control-label">Name</label>
            <input name="name"className = "form-control" type = "text" />
          </div>
          <div className="form-group col-lg-7">
            <label className= "control-label">Image Source</label>
            <input name="image"className = "form-control" type = "text" />
          </div>
          <div className= "col-lg-7">
            <button
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

const mapDispatch = (dispatch) => {
  return {
    handleSubmit: function(event) {
      dispatch(newCampus(event.target.name.value, event.target.image.value))
    }
  }
}

export default connect(null, mapDispatch)(addCampus)

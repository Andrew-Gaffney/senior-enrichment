import React from 'react'
import {Link, browserHistory} from 'react-router'
import {connect} from 'react-redux'
import {deleteCampus} from '../redux/campuses'

const Campuses = ({campuses, handleDelete}) => {
  return (
    <div className="container-fluid">
      <div className="row">
    {
      campuses.map(campus => {
        return (
          <div className="col-lg-4" key = {campus.id}>
            <Link to = {`/campuses/${campus.name}`}>
              <div>
                <h3>{campus.name}</h3>
                <img src = {campus.image} className="img-thumbnail" />
              </div>
            </Link>
            <form onSubmit={handleDelete}>
              <button className="btn btn-danger btn-xs" name="delete"type="submit" value= {campus.name}>Delete Campus</button>
            </form>
           </div>
        )
      })
    }
      </div>
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
    handleDelete: function(event) {
      dispatch(deleteCampus(event.target.delete.value))
      browserHistory.push('/')
    }
  }
}

export default connect(mapState, mapDispatch)(Campuses)

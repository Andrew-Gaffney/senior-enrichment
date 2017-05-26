import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

const Campuses = ({campuses}) => {
  return (
    <div>
    {
      campuses.map(campus => {
        return (
          <Link key = {campus.id} to = {`/campuses/${campus.name}`}>
            <div>
              <h3>{campus.name}</h3>
              <img src = {campus.image} className="img-thumbnail" />
            </div>
          </Link>
        )
      })
    }
    </div>
    )
}

const mapState = (state) => {
  return {
    campuses: state.campuses
  }
}

export default connect(mapState)(Campuses)

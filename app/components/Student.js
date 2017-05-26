import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

const Student = ({student, campus}) => {
  return (
    <div>
      <h3>{student.name}</h3>
      <h3>{student.email}</h3>
      <Link to = {`/campuses/${campus.name}`}>
        <h3>{campus.name}</h3>
      </Link>
    </div>
  )
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
    campus: campus
  }
}

export default connect(mapState)(Student)

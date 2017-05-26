import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

const Campus = ({name, students}) => {
  return (
    <div>
      <h3>{`${name} Campus`}</h3>
      <ul>
      {
        students.map(student => {
          return (
            <Link key= {student.id} to ={`students/${student.id}`}>
              <li>{student.name}</li>
            </Link>
          )
        })
      }
      </ul>
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

export default connect(mapState)(Campus)

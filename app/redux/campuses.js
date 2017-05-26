import axios from 'axios'

//CONSTANTS
const INITIALIZE = 'INITIALIZE_CAMPUSES'
const GET_STUDENTS = 'GET_STUDENTS'

//ACTION CREATORS
const init = campuses => ({type: INITIALIZE, campuses})
const getCampusStudents = campusStudents => ({type: GET_STUDENTS, campusStudents})

//REDUCER
export default function campusReducer(campuses = [], action) {
  switch (action.type) {
    case INITIALIZE:
      return action.campuses

    case GET_STUDENTS:
      return action.campusStudents

  default:
    return campuses
  }
}

//DISPATCHERS
export const fetchCampuses = () => dispatch => {
  axios.get('/api/campuses')
  .then(res => dispatch(init(res.data)))
  .catch((err) => {
    console.log(err)
  })
}

export const fetchCampusStudents = (campusName) => dispatch => {
  axios.get(`/api/campus/${campusName}`)
  .then(res => dispatch(getCampusStudents(res.data)))
  .catch((err) => {
    console.log(err)
  })
}

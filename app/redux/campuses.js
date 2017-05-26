import axios from 'axios'

//CONSTANTS
const INITIALIZE = 'INITIALIZE_CAMPUSES'
const REMOVE_CAMPUS = 'REMOVE_CAMPUS'

//ACTION CREATORS
const init = campuses => ({type: INITIALIZE, campuses})
const removeCampus = campus =>({type: REMOVE_CAMPUS, campus})

//REDUCER
export default function campusReducer(campuses = [], action) {
  switch (action.type) {
    case INITIALIZE:
      return action.campuses

    case REMOVE_CAMPUS:
      return campuses.filter(campus => {
        return campus.name !== action.campus.name
      })

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

export const deleteCampus = (name) => dispatch => {
  axios.delete(`/api/campuses/${name}`)
  .then(res => dispatch(removeCampus(res.data)))
  .catch(err => {
    console.log(err)
  })
}

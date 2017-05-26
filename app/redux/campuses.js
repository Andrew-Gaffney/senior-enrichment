import axios from 'axios'
import {browserHistory} from 'react-router'

//CONSTANTS
const INITIALIZE = 'INITIALIZE_CAMPUSES'
const ADD_CAMPUS = 'ADD_CAMPUS'
const REMOVE_CAMPUS = 'REMOVE_CAMPUS'
const UPDATE = 'UPDATE'

//ACTION CREATORS
const init = campuses => ({type: INITIALIZE, campuses})
const removeCampus = campus => ({type: REMOVE_CAMPUS, campus})
const addCampus = campus => ({type: ADD_CAMPUS, campus})
const update = campus => ({type: UPDATE, campus})

//REDUCER
export default function campusReducer(campuses = [], action) {
  switch (action.type) {
    case INITIALIZE:
      return action.campuses

    case ADD_CAMPUS:
      return [action.campus, ...campuses]

    case UPDATE:
      return campuses.filter(campus => {
        return campus.id !== action.campus.id
      }).push(action.campus)

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

export const updateCampus = (name, newName, image) => dispatch => {
  axios.put(`/api/campuses/${name}`,
  {
    name: newName, image: image
  })
  .then(res => dispatch(update(res.data)))
  browserHistory.push(`/campuses/${newName}`)
}

export const newCampus = (name, image) => dispatch => {
  axios.post('/api/campuses', {
    name: name, image: image
  })
  .then(res => dispatch(addCampus(res.data)))
  browserHistory.push('/')
}

export const deleteCampus = (name) => dispatch => {
  axios.delete(`/api/campuses/${name}`)
  .then(res => dispatch(removeCampus(res.data)))
  .catch(err => {
    console.log(err)
  })
}

import axios from 'axios'

//CONSTANTS

const INITIALIZE = 'INITIALIZE_USERS'
const ADD = 'ADD_USER'
const REMOVE = 'REMOVE_USER'
const UPDATE = 'UPDATE_USER'

//ACTION CREATORS

const init = users => ({type: INITIALIZE, users})
const add = user => ({type: ADD, user})
const remove = id => ({type: REMOVE, id})
const update = user => ({type: UPDATE, user})

//REDUCER

export default function reducer(users = [], action) {
  switch (action.type) {
    case INITIALIZE:
      return action.users

    case ADD:
      return [action.user, ...users]

    case REMOVE:
      return users.filter(user => {
        return user.id !== action.id
      })
    case UPDATE:
      return users

    default:
      return users
  }
}

//DISPATCHERS

export const fetchUsers = () => dispatch => {
  axios.get('/api/students')
  .then(res => dispatch(init(res.data)))
}

export const addUser = (name, email, campusId) => dispatch => {
  axios.post('/api/students',
  {name: name, email: email, campusId: campusId})
    .then(res => dispatch(add(res.data)))
}

export const removeUser = (studentId) => dispatch => {
  axios.delete(`/api/students/${studentId}`)
    .then(res => dispatch(remove(res.data)))
}

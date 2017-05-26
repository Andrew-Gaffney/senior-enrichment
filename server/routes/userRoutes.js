const router = require('express').Router()
const User = require('../../db').model('user')

router.get('/', (req, res, next) => {
  User.findAll()
  .then(users => {
    res.json(users)
  })
  .catch(next)
})
router.get('/:id', (req, res, next) => {
  User.findById(req.params.id)
  .then(student => {
    res.json(student)
  })
  .catch(next)
})
router.post('/', (req, res, next) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
    campusId: req.body.campusId
  })
  .then(createdStudent => {
    res.json(createdStudent)
  })
})
router.delete('/:id', (req, res, next) => {
  User.findById(req.params.id)
  .then(foundStudent => {
    foundStudent.destroy()
    .then(() => {
      res.end()
    })
  })
})

router.put('/:id', (req, res, next) => {
  User.findById(req.params.id)
  .then(student => {
    student.update(req.body, {returning: true})
    .then(updatedStudent => {
      res.json(updatedStudent)
    })
  })
})

module.exports = router

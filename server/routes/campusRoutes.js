const router = require('express').Router()
const Campus = require('../../db').model('campus')
const User = require('../../db').model('user')

router.get('/', (req, res, next) => {
  Campus.findAll()
  .then(campuses => {
    res.json(campuses)
  })
  .catch(next)
})
router.get('/:campusName', (req, res, next) => {
  Campus.findOne({
    where: {
      name: req.params.campusName
    }
  })
  .then(campus => {
    User.findAll({
      where: {
        campusId: campus.id
      }
    })
    .then(students => {
      if (!students.length) {
        res.send('No students found')
      }
      else {
        res.json(students)
      }
    })
  })
  .catch(next)
})
router.post('/', (req, res, next) => {
  Campus.create({
    name: req.body.name,
    image: req.body.imageURL
  })
  .then(createdCampus => {
    res.json(createdCampus)
  })
})
router.delete('/:campusName', (req, res, next) => {
  Campus.findOne({
    where: {
      name: req.params.campusName
    }
  })
  .then(foundCampus => {
    foundCampus.destroy()
    .then(() => {
      res.end()
    })
  })
})

router.put('/:campusName', (req, res, next) => {
  Campus.findOne({
    where: {
      name: req.params.campusName
    }
  })
  .then(campus => {
    campus.update(req.body, {returning: true})
    .then(updatedCampus => {
      res.json(updatedCampus)
    })
  })
})

module.exports = router

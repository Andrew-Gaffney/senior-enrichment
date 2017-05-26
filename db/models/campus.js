var Sequelize = require('sequelize')
var db = require('../index.js')

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: 'https://vignette3.wikia.nocookie.net/starwars/images/4/4e/PurplePlanet-FT.jpg/revision/latest?cb=20100113135842'
  }
})

module.exports = Campus

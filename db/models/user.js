'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
}, {
  validate: {
    isAssigned: function() {
      if (!this.campusId) throw new Error('Student must be assigned to a school.')
    }
  }
})

module.exports = User

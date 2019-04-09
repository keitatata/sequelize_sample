'use strict';

var models = require('../models')

models.sequelize.sync({
  force: true,
  logging: console.log,
})
  .then(function () {
    return models.sequelize.close()
  })

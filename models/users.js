'use strict';

module.exports = function (sequelize, DataTypes) {
  var aaaa = sequelize.define('aaaa', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  })

  return aaaa
}
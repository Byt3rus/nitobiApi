'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {});
  Employee.associate = function(models) {
    // associations can be defined here
  };
  return Employee;
};
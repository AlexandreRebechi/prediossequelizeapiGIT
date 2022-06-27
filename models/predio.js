'use strict';
module.exports = (sequelize, DataTypes) => {
  const predio = sequelize.define('predio', {
      nome: DataTypes.STRING,
      local: DataTypes.STRING,
      preco: DataTypes.DECIMAL
      
  });
  return predio;
};
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('predios', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    nome: {
      allowNull: false,
      type: Sequelize.STRING(50),
    },
    local: {
      allowNull: false,
      type: Sequelize.STRING(100),
    },
    preco: {
      allowNull: false,
      type: Sequelize.DECIMAL(10,2),
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),

  down: queryInterface => queryInterface.dropTable('predios'),
};

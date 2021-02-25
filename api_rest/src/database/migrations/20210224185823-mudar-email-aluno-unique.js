module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('alunos', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
  },

  down: () => {},
};

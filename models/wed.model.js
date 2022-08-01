module.exports = (sequelize, Sequelize) => {
    const Wed = sequelize.define("wed", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.BIGINT
      },
      picked: {
        type: Sequelize.BOOLEAN
      },
      via_planner: {
        type: Sequelize.BOOLEAN
      },
      type: {
        type: Sequelize.STRING
      }
    });
  
    return Wed;
  };
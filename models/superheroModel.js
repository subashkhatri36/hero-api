module.exports = (sequelize, DataTypes) => {
    const SuperHero = sequelize.define("SuperHeros", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
      name: {
        type: DataTypes.STRING,
      },
      powerstat: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      timestamps: true,
      createdAt: true,
    });
    return SuperHero;
}
    /*
    SELECT * FROM Heros WHERE name LIKE '%u%';
    */
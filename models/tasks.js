// Define model for tasks table 
module.exports = function(sequelize, Datatypes) {
    var Task = sequelize.define ("tasks_fx", {
        taskId: {
            type: Datatypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        userId: {
            type: Datatypes.INTEGER,
            foreignKey: true,
        },
        taskDate: {
            type: Datatypes.DATE,
            allowNull: false
        },
        taskInfo: {
            type: Datatypes.TEXT,
            allowNull: false
        }
    }, {freezeTableName: true});

    // Generating tables asociation 
    Task.associate =  function(models) {
        Task.belongsTo(models.users_fx, {
            foreignKey: 'userId'
        });
    };


    return Task;
};
module.exports = function(sequelize, Datatypes) {
    var User = sequelize.define ("users_fx", {
        userId: {
                type: Datatypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
        userName: {
                type: Datatypes.STRING,
                allowNull: false
            },
        pwd: {
            type: Datatypes.STRING,
            allowNull: false
        }
    }, {freezeTableName: true});

    // Generating tables asociation 
    User.associate =  function(models) {
        User.hasMany(models.tasks_fx, {
            onDelete: "CASCADE"
        },
        User.associate = function() {
            User.hasMany(models.quotes_fx, {
                onDelete: "CASCADE"
            });
        });
    };


    return User;
};
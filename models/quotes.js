// Define model for quotes table 
module.exports = function(sequelize, Datatypes) {
var Quote = sequelize.define("quotes_fx", {
    quoteId: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: Datatypes.INTEGER,
        foreignKey: true
    },
    quoteText: {
        type: Datatypes.TEXT,
        allowNull: false,
        len: [1]
    }
}, {freezeTableName: true});

// Generating tables asociation 
    Quote.associate =  function(models) {
        Quote.belongsTo(models.users_fx, {
            foreignKey: 'userId'
        });
    };
    return Quote;
};
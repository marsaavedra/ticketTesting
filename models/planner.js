module.exports = function(sequelize, DataTypes) {
  var Tickets = sequelize.define("Tickets", {

  	id: {
  		autoincrement: true,
  		primaryKey: true,
  		type: DataTypes.INTEGER
  	},

    title: {
    	type: DataTypes.STRING
    },

    category: {
    	type: DataTypes.STRING
    },

    message: {
    	type: DataTypes.STRING
    },
    priority: {
    	type: DataTypes.STRING
    },

    done: {
    	type: DataTypes.BOOLEAN}
  });
  return Tickets;
    console.log("Tickets: ", Tickets);
};




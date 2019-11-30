'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		idTweet: {
			field: `idTweet`,
			type: DataTypes.INTEGER,
			allowNull: true
		},
		textoTweet: {
			field: `textoTweet`,
			type: DataTypes.STRING,
			allowNull: true
		},
	}, 
	{
		tableName: 'Tweet', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
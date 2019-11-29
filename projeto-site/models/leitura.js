'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Leitura = sequelize.define('Leitura',{	
		idUsuario: {
			field: `idUsuario`,
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		nomeCompleto: {
			field: `nomeCompleto`,
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			field: `email`,
			type: DataTypes.STRING,
			allowNull: false
		},
		dataNasc: {
			field: `dataNasc`,
			type: DataTypes.DATE,
			allowNull: false
		},
		qtdGatos: {
			field: `qtdGatos`,
			type: DataTypes.INTEGER,
			allowNull: false
		},
		nivelAmor: {
			field: `nivelAmor`,
			type: DataTypes.INTEGER,
			allowNull: false
		},
		nomeUsuario: {
			field: `nomeUsuario`,
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			type: DataTypes.STRING,
			allowNull: false
		},
	}, 
	{
		tableName: 'Usuario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Leitura;
};

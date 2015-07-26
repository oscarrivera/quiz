module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
  	'Ingrediente',
    { nombre: {
        type: DataTypes.STRING,
        validate: { notEmpty: {msg: "-> Falta nombre"}}
      },
      unidad: {
          type: DataTypes.STRING,
          validate: { notEmpty: {msg: "-> Falta unidad"}}
        },
        proveedor: {
            type: DataTypes.STRING,
            validate: { notEmpty: {msg: "-> Falta proveedor"}}
          },
          familia: {
              type: DataTypes.STRING,
              validate: { notEmpty: {msg: "-> Falta familia"}}
            }
    }
  );
}

module.exports = function(sequelize, Datatypes) {
    var User = sequelize.define('User', {
        user_id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Email required"
                }
            }
        },
        name: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Name required"
                }
            }
        }
    });

    return User;
};
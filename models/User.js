module.exports = (sequelize, datatypes) => {
    const User = sequelize.define("User", {
        name: {
            type: datatypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: datatypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        googleId: {
            type: datatypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true
            }
        },
        channelName: {
            type: datatypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true
            }
        },
        profilePictureUrl: {
            type: datatypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true
            }
        }
    })

    return User
}
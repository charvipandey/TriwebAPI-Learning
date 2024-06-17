const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

async function performDatabaseOperations() {
    try {
        await sequelize.sync({ force: true });
        console.log('Database synced');

        const newUser = await User.create({ name: 'John Doe', email: 'john@example.com' });
        console.log('User created:', newUser.toJSON());

        const users = await User.findAll();
        console.log('All users:', JSON.stringify(users, null, 2));

        const user = await User.findByPk(1);
        console.log('User found by ID:', user ? user.toJSON() : 'User not found');

        if (user) {
            user.name = 'Jane Doe';
            await user.save();
            console.log('User updated:', user.toJSON());
        }

        if (user) {
            await user.destroy();
            console.log('User deleted');
        }
    } catch (error) {
        console.error('Error performing database operations:', error);
    } finally {
        await sequelize.close();
    }
}

performDatabaseOperations();

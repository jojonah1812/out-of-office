const sequelize = require('../config/connection');
const { Location, Trip, User} = require('../models');

const locationSeedData = require('./location-seeds.json');
const tripSeedData = require('./trip-seeds.json');
const userSeedData = require('./user-seeds.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Location.bulkCreate(locationSeedData, {
        individualHooks: true,
        returning: true,
    });
    console.log('\n----- LOCATIONS SEEDED -----\n');

    await User.bulkCreate(userSeedData, {
        individualHooks: true,
        returning: true,
    });
    console.log('\n----- USERS SEEDED -----\n');

    await Trip.bulkCreate(tripSeedData, {
        individualHooks: true,
        returning: true,
    });
    console.log('\n----- TRIPS SEEDED -----\n');

    process.exit(0);
};

seedDatabase();

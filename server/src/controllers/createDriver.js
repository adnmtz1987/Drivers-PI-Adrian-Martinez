const { Driver, Team } = require('../db');

const createDrivers = async(data) => {
    const teams = await Team.findAll({where: {name: data.teams}})
    const driverNew = await Driver.create(data);
    driverNew.addTeam(teams)
    if(driverNew) return driverNew
    return null;
};

module.exports = createDrivers;
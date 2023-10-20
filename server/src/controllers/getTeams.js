const axios = require("axios");
const { Driver, Team } = require("../db");

const getTeams = async () => {
   
    const teams = [];
    const regex = /\s*,\s*/;
    const { data } = await axios('http://localhost:5000/drivers');
    data.map(driver => {
        if(driver.teams) driver.teams.split(regex).map(driver => teams.push(driver))
    });
const allTemas = [...new Set(teams)];
if(!teams) return null;
for(let i = 0; i < allTemas.length; i++){
    await Team.create({name: allTemas[i]})
}
return allTemas;
};

module.exports = getTeams
const axios = require('axios');
const { Driver, Team } = require('../db');

const getDriversById = async(id) =>{
  if(id.includes('-')){
    const dataFilter = await dataFilter.push(Driver.findAll({where: {id: id}, include:[{model: Team, through: 'driver_teams'}]}))
    if(dataFilter) return dataFilter
  }
  const { data } = await axios(`http://localhost:5000/drivers/${id}`)
  if(data) return data;
  return null
}

module.exports = getDriversById
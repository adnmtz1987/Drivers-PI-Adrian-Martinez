const { Driver, Team} = require('../db');
const axios = require('axios')

const getDriverByName = async(name) => {
  const { data } = await axios('http://localhost:5000/drivers')
  const filter = await data.filter(driver => driver.name.surname.toLowerCase().includes(name));
  if(filter.length){
    const driver = filter;
    return driver
  };
  const dBFilter = await Driver.findAll({ where: {'name': name}})
  if(dBFilter.length){
    const driver = dBFilter.slice(0, 15)
    return driver
  }
  return null
}

module.exports = getDriverByName
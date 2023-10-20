const createDrivers = require('../controllers/createDriver');
const getDrivers = require('../controllers/getDrivers');
const getDriversById = require('../controllers/getDriversById');
const getDriverByName = require('../controllers/getDriversByName');

//handler DRIVER

const handlerGetDrivers = async (req, res) => {
    try {
        const response = await getDrivers();
        if(!response) throw Error(`Not exist data of this Driver`)
        if(response) return res.status(200).json(response)
    } catch (error) {
        return res.status(500).send(`
        I can't find drivers!`)
    }
}

//handler ByID
const handlerGetDriversById = async (req, res) => {
    try {
        const { id } =req.params;
        const driver = await getDriversById(id);
        if(!driver) throw Error ('Driver not found!');
        if(driver) return res.status(200).json(driver);
    } catch (error) {
        return res.status(500).send('Cant get drivers by id!.')
    }
}

//handler BYNAME

const handlerGetDriverByName = async(req, res) => {
    try {
        const name = req.query.name.toLowerCase();
        const driver = await getDriverByName(name);
        if(!driver) throw Error('Driver not found!')
        if(driver) return res.status(200).json(driver)
    } catch (error) {
        return res.status(500).send('Cant get drivers by name!.')
    }
}

//handler CREATE

const handlerCreateDrivers = async(req, res) => {
    try {
        const data = {...req.body};
        const driverNew = await createDrivers(data);
        if(!driverNew) throw Error(`driver Could Not Be Breated!`)
        if(driverNew) return res.status(200).send(driverNew);
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = {
    handlerGetDrivers,
    handlerGetDriversById,
    handlerGetDriverByName,
    handlerCreateDrivers
}
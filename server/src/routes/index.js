const { Router } = require("express");
const handlerGetTeams = require('../handlers/teamHandler');
const { handlerGetDrivers, handlerGetDriversById, handlerGetDriverByName, handlerCreateDrivers} = require('../handlers/driverHandlers')

const router = Router();

router.get('/teams', handlerGetTeams);

router.get('/drivers', handlerGetDrivers);
router.get('/drivers/:id', handlerGetDriversById);
router.get('/driver/', handlerGetDriverByName);
router.post('/drivers', handlerCreateDrivers);

module.exports = router;

const getTeams = require('../controllers/getTeams');

const handlerGetTeam = async(req, res) => {
    try {
        const response = await getTeams();
        if(!response) throw Error('Teams not Found!')
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).send('Cant get Teams!')
    }
}

module.exports = handlerGetTeam;
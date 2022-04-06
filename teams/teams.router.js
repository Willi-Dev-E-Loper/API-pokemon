const express = require('express');
const router = express.Router();
const teamsHttpHandlet = require('./teams.http');


router.route('/')
    .get(teamsHttpHandlet.getTeamFromUser)
    .put(teamsHttpHandlet.setTeamToUser)
    
router.route('/pokemons')
    .post(teamsHttpHandlet.addPokemonToTeam);
    
router.route('/pokemons/:pokeid')
    .delete(teamsHttpHandlet.deletePokemonFromTeam)

exports.router = router;


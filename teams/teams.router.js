const express = require('express');
const router = express.Router();
const teamController = require('./teams.controller')
const {getUser} = require('../auth/users.controller');
const axios = require('axios').default;

router.route('/')
    .get((req, res, next) => {
            let user = getUser(req.user.userId)
            res.status(200).json({
                trainer: user.userName,
                team: teamController.getTeamOfUser(req.user.userId)})
    })
    .put((req, res) => {
        teamController.setTeam(req.user.userId, req.body.team);
        res.status(200).send();
    })
    
router.route('/pokemons')
    .post((req, res) => {
            let pokemonName = req.body.name;
            console.log('Calling pokeapi')
            axios.get(` https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
                .then(function(response) {
                    let pokemon = {
                        name: pokemonName,
                        pokedexNumber:response.data.id
                    }
                    teamController.addPokemon(req.user.userId, pokemon);
                    res.status(201).json(pokemon)
                })
                .catch(function(err) {
                    console.log(err);
                    res.status(400).json({message: error});
                })
                .then(function() {

                });
    
    })
router.route('/pokemons/:pokeid')
    .delete((req, res) => {
        teamController.deletePokemonAt(req.user.userId, req.params.pokeid);
        res.status(200).send();
    })

exports.router = router;


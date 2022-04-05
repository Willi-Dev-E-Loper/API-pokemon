const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const passport = require('passport');
const teamController = require('../controllers/teams')
const {getUser} = require('../controllers/users');
require('../auth')(passport);
const axios = require('axios').default;

router.route('/')
    .get(passport.authenticate('jwt', {session: false}), 
        (req, res, next) => {
            let user = getUser(req.user.userId)
            res.status(200).json({
                trainer: user.userName,
                team: teamController.getTeamOfUser(req.user.userId)})
    })
    .put(passport.authenticate('jwt', {session: false}),
        (req, res) => {
        teamController.setTeam(req.user.userId, req.body.team);
        res.status(200).send();
    })
    
router.route('/pokemons')
    .post(passport.authenticate('jwt', {session: false}),
    (req, res) => {
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
    .delete(passport.authenticate('jwt', {session: false}),
    (req, res) => {
        teamController.deletePokemonAt(req.user.userId, req.params.pokeid);
        res.status(200).send();
    })

exports.router = router;


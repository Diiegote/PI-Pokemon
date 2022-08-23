const { Router } = require('express');
const { allPokemons } = require('../ControlGet');
const { getPokemonDbById } = require('../ControlId');
const { getPokemonByName } = require('../ControlName');
const { postPokemon } = require('../ControlPost');
const { pokeType } = require('../ControlType');



// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
router.get("/pokemons",getPokemonByName)
router.get("/pokemons/:id",getPokemonDbById)
router.get("/type",pokeType)
router.post("/pokemons",postPokemon)

module.exports = router;














// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



#Objetivo:
Definir una API para fgestionar nuetro equipo pokemon

#Aciones:
-Identificarnos
-Añadir pokemon a nunestro equipo
-Eliminar pokemon de nuestro equipo
-Consultar el orden de nuestro pokemon
-Intercambiar el orden de nuestros pokemon


#REST Design:
-Añadir Pokémon:POST /team/pokemons
-Consultar Equipo: GET /team
-Eliminar Pokémon: DELETE /team/pokemon/:id
-Intercambiar Pokémon: PUT /team
-Sistema de credenciales
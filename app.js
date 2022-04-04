const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=> {
    //req es la peticion
    //res es la respuesta
    res.status(200).send('Hello World')
});
app.listen(port, () => {
    console.log('Server started at port 3000');
})

app.post('/team/pokemons', () => {
    res.status(200).send('helo world')
})

app.delete('/team/pokemon/:pokeid', () => {
    res.status(200).send('helo world')
})

app.get('/team', () => {
    res.status(200).send('helo world')
})

app.put('/team', () => {
    res.status(200).send('helo world')
})
//Exportamos app para poder ofrecer conexion a la suite de test
exports.app = app;
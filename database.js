const mongoose = require('mongoose');
let password = 'admin';
let databaseName = 'db';
if (process.env.NODE_ENV === 'test') {
    databaseName = 'testdb';
}

mongoose.connect(`mongodb+srv://GuilleDevMora:<xxxxxxxxxxxx>@cluster0.zwf7t.mongodb.net/${databaseName}?retryWrites=true&w=majority`, 
    {useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model({name: 'Nasa'});
kitty.save().then(()=> console.log('Meow')); 
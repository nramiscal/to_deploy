// import controllers
let Pets = require('../controllers/pets');

module.exports = (app) => {
    // all my routes
    // app.get('/api/', Pets.all);
    // app.get('/api/pets', Pets.all);
    app.get('/api/pets', Pets.sortByType);
    app.post('/api/pets', Pets.create);
    app.get('/api/pets/:id', Pets.show);
    app.put('/api/pets/:id', Pets.update);
    app.delete('/api/pets/:id', Pets.destroy);
    app.all("*", Pets.noMatch);
}

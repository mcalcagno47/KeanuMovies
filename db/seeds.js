const db = require('../models/index');
const Movie = require('../models/Movie');

const moviesForDb = [
    {
        name: 'John Wick',
        year: '2018',
        description: 'John Wick kills everyone',
        used: 'TRUE'
    }
]

const seed = () => {
    return Movie.bulkCreate(moviesForDb)
}

seed()
.then(() => {
    process.exit();
});


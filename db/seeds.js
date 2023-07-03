const Movie = require('../models/Movie');

const moviesForDb = [
    {
        name: 'John Wick',
        year: '2018',
        description: 'John Wick kills everyone who deserves it and gets a dog',
        usedMovie: "true"
    },
    {
        name: 'Test1',
        year: '2021',
        description: 'Test description 1',
        usedMovie: "false"
    },
    {
        name: 'Test2',
        year: '2022',
        description: 'Test description 2',
        usedMovie: "false"
    },
    {
        name: 'Test3',
        year: '2023',
        description: 'Test description 3',
        usedMovie: "false"
    },
]

const seed = () => {
    return Movie.bulkCreate(moviesForDb)
}

seed()
.then(() => {
    process.exit();
});


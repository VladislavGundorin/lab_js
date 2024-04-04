function movies(companys) {
    const movies = {};

    companys.forEach(company => {
        let parts = company.split(' ');
        let action = parts[0];
        let params = parts.slice(1);
        if (action === 'addMovie') {
            const movieName = params.join(' ');
            if (!movies[movieName]) {
                movies[movieName] = {};
            }
        } else if (company.includes('directedBy')) {
            const [movieName, director] = company.split(' directedBy ');
            if (movies[movieName]) {
                movies[movieName].director = director;
            }
        } else if (company.includes('onDate')) {
            const [movieName, date] = company.split(' onDate ');
            if (movies[movieName]) {
                movies[movieName].date = date;
            }}
    });
    Object.keys(movies).forEach(movieName => {
        const movie = movies[movieName];
        if (movie.director && movie.date) {
            console.log(JSON.stringify({ name: movieName, ...movie }));
        }
    });
}
const companys = [
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
];
movies(companys);

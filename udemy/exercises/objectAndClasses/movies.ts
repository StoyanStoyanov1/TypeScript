function movies(arrInput: string[]): void {
    interface Movie {
        name: string,
        date?: string,
        director?: string,
    };

    const arrMovies: Movie[] = [];
    
    function addMovie(movieName: string): void {
        if (!arrMovies.some(movie => movie.name === movieName)) {
            arrMovies.push({name: movieName});
        }
    };

    function addDirectorToMovie(movieName: string, director: string): void {
        const findMovie = arrMovies.find(movie => movie.name === movieName);
        if (findMovie) {
            findMovie.director = director;
        }
    };

    function addDateToMovie(movieName: string, date: string): void {
        const findMovie = arrMovies.find(movie => movie.name === movieName);

        if (findMovie) {
            findMovie.date = date;
        }
    };

    arrInput.forEach(input => {
        if (input.startsWith('addMovie')) {
            const movieName = input.substring(9)
            addMovie(movieName)
        } else if (input.includes("directedBy")) {
            const [movieName, director] = input.split(' directedBy ')
            addDirectorToMovie(movieName, director)
        } else if (input.includes('onDate')) {
            const [movieName, date] = input.split(' onDate ')
            addDateToMovie(movieName, date)
        }
    });


    const completedMovies = arrMovies.filter(movie => movie.name && movie.director && movie.date)

    completedMovies.forEach(movie => console.log(JSON.stringify(movie)))

}
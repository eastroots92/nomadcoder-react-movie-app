import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'

function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="movie-layout">
            <div className="movie-columns">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="movie-columns">
                <h1>{title}</h1>
                <div className="movie-genres">
                    { genres.map((genre, index) => <MovieGenre genre={genre} key={index} /> )}
                </div>
                <p className="Movie-synopsis">
                    <LinesEllipsis
                        text= {synopsis}
                        maxLine= '3'
                        ellipsis= '...'
                        trimRight
                        basedOn= 'letters'
                    />
                </p>
            </div>
        </div>
    )
}

function MovieGenre({genre}){
    return (
        <span className="movie-genre">{genre}</span>
    )
}

function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="movie-poster" />
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired,
};

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired,
};

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Movie;

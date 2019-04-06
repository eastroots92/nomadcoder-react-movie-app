import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

export default class Movie extends React.Component {
    render() {
        const { title, poster } = this.props;
        return (
            <div>
                <MoviePoster poster={poster}/>
                <h1>{title}</h1>
            </div>
        )
    }
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

class MoviePoster extends React.Component {
    render() {
        const { poster } = this.props;
        return (
            <img src={poster} />
        )
    }
}

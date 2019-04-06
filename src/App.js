import React, { Component } from 'react';
import Movie from './Movie';

const movies = [1, 2, 3, 4, 5];
class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => (
            <Movie key={index}
                   title='hello'
                   poster='https://amp.businessinsider.com/images/56e0323fdd089575198b45bc-750-375.jpg'
            />
        ))};
      </div>
    );
  }
}

export default App;

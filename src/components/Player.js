import React, { Component } from 'react';
import './styles.css'
import Config from './Config';
import axios from 'axios'
class Player extends Component {
    constructor() {
        super();
        this.state = {
            movieDescription: []
        }
    }
    componentDidMount() {
        const singleMovieUrl = "https://api.themoviedb.org/3/movie/";
        const movieInfo = `${singleMovieUrl}${this.props.match.params.movieID}?api_key=${Config.api_key}`;

        axios.get(movieInfo).then((response) => {
            this.setState({
                movieDescription: response.data
            });
        }).catch((error) => {
            console.log(error)
        });
    }
    render() {
        const imageUrl = "http://image.tmdb.org/t/p/w300";
        console.log("Info:  ", this.state.movieDescription);
        const movieData = this.state.movieDescription;
        return (
            <div className="row">
            <div className="col s12 m6 l4">
              <div className="card">
                <div className="card-image">
                  <img src={`${imageUrl}${movieData.poster_path}`} alt=""/>
                  <span className="card-title">{movieData.original_title}</span>
                </div>
                <div className="card-content">
                    <h4>Description</h4>
                  <p className="textStyle">{movieData.overview}</p>
                </div>
                <div className="card-action">
                  <a href={movieData.homepage}>Movie HomePage</a>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default Player;

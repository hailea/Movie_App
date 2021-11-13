import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Config from './Config';
import './styles.css'

class Home extends Component{
    constructor(){
        super();
        this.state = {
            movieData: []
        }
    }
    componentDidMount(){
        const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing";
        const url = `${nowPlayingUrl}?api_key=${Config.api_key}`
        axios.get(url).then((response)=>{
            const movieList = response.data.results;
            this.setState( {
                movieData:movieList
            });
        });
    }
    render(){
        const imageUrl = "http://image.tmdb.org/t/p/w300";
        console.log("Home:",this.state.movieData);
        const movieResults = this.state.movieData.map((movie,index)=>{
            return(
                <div className="col s12 m6 l4 imgBoxStyles" key={index}>                    
                <Link to={`/movie/${movie.id}`}>
                    <img className="materialboxed imgSize" width="350" height="450" src={`${imageUrl}${movie.poster_path}`} alt="" />
                 </Link>
                    <span className="titleStyle">{movie.title}</span>                    
                </div>
            );

        }

        );
        return(
            <div className="container">
            <div className="row">
                {movieResults}
            </div>
            </div>
        );
    }
}
 export default Home;
/*
    const apiKey = "fec8b5ab27b292a68294261bb21b04a5";
    const singleMovieUrl = "https://api.themoviedb.org/3/movie/"
    const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing";
    const imageUrl = "http://image.tmdb.org/t/p/w300";
*/
import React, { useEffect, useState } from 'react';
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import { Link } from "react-router-dom";
import conf from '../conf/conf';

export default function Home() {

    // const [pageNo, setPageNo] = useState("2");
    const [topRatedMovies, setTopRatedMovies] = useState([])

    const imageUrl = "https://image.tmdb.org/t/p/original";

    // const [moviePoster,setMoviePoster]=useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${conf.movieAPIkey}&language=en-US`)
            .then(res => res.json()).then(data => setTopRatedMovies(data.results));

    }, []);
    return (
        <>
            <div className='poster' >
                <Carousel autoPlay={true} showThumbs={false} transitionTime={3} infiniteLoop={true} showStatus={false}>
                    {

                        topRatedMovies.map(movie => (

                            <div className="posterimage">
                                <img src={imageUrl + movie.backdrop_path} alt="" />
                                <div className="movies_details" style={{ fontSize: "20px" }}>
                                    <div className="Movie_title"><h1>{movie.original_title}</h1></div>
                                    <div className="Movie_release_date">Release Date: {movie.release_date}</div>
                                    <div className="Movie_overview">{movie.overview}</div>
                                    <div className="Movie_vote" >Votes: {movie.vote_average}/10 <i ></i> </div>
                                </div>

                            </div>

                        ))
                    }
                </Carousel>
            </div>
            


        </>
    )
}

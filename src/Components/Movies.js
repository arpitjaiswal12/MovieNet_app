import React, { useEffect, useState } from 'react'
import Movies_items from './Movies_items';
import conf from '../conf/conf';


export default function Movies(props) {

    const ImgUrl = "https://image.tmdb.org/t/p/original";

    const [page_no, changePageNo] = useState(1);

    const [movieList, SetMovieList] = useState([]);


    let response;
    const getmovies = async () => {
        if (props.genresId === "100") {
            response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${conf.movieAPIkey}&language=en-US&page=${page_no}`)

        } 
        else if (props.genresId === "101") {
            response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${conf.movieAPIkey}&language=en-US&page=${page_no}`)
        }
        else {
            response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${conf.movieAPIkey}&with_genres=${props.genresId}&page=${page_no}`)
        }

        const data = await response.json();
        // console.log(data);
        SetMovieList(data.results);
    }

    useEffect(() => {
        getmovies();
    })

    const handleNextbtn = () => {
        changePageNo(page_no + 1);
        getmovies();

    }
    const handlepreviousbtn = () => {
        changePageNo(page_no - 1);
        getmovies();
    }

    const truncate = (str, len) => {
        if (str.length > len) {
            if (len <= 3) {
                return str.slice(0, len - 3) + ". . . . .";
            }
            else {
                return str.slice(0, len) + ". . . . .";
            };
        }
        else {
            return str;
        };
    };



    return (
        <div>
            <div className="conatiner mx-5 my-5">
                <h2 style={{ color: "white", marginBottom: "20px" }}>{props.categoryName}</h2>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {movieList.map((item) => {
                        return (
                            <div className="col">
                                <Movies_items posterImg={ImgUrl + item.poster_path} movieTitle={item.original_title} description={truncate(item.overview, 150)} vote_average={item.vote_average} release_date={item.release_date} movie_Id={item.id} />
                            </div>
                        )
                    })}

                </div>
                <div className="page-btns d-flex justify-content-between" style={{ marginTop: "20px" }}>
                    <button type="button" disabled={page_no <= 1} class="btn btn-success" onClick={handlepreviousbtn}>&larr; Previous</button>
                    <button type="button" disabled={page_no >= 25} class="btn btn-success" onClick={handleNextbtn}>Next &rarr;</button>
                </div>

            </div>

        </div>
    )
}

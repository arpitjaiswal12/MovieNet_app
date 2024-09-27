import React, { Component } from 'react';

export default class Movies_items extends Component {
    render() {
        return (
            <div>
                <div className="card text-white bg-dark" style={{ width: "15rem", height: "25rem", overflow: "hidden" }}>
                    <img 
                        src={this.props.posterImg} 
                        className="card-img-top" 
                        alt="Poster" 
                        style={{ height: "10rem", objectFit: "cover" }} // Adjust image height and fit
                    />
                    <div className="card-body" style={{ height: "15rem", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <h5 className="card-title" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {this.props.movieTitle}
                        </h5>
                        <p className="card-text">📅 {this.props.release_date}</p>
                        <p className="card-text" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {this.props.description}
                        </p>
                        <p className="card-text">⭐ {this.props.vote_average}</p>
                        <a href={`https://www.themoviedb.org/movie/${this.props.movie_Id}/videos?active_nav_item=Trailers`} rel="noreferrer" className="btn btn-primary" target='_blank'>
                            Watch Now
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

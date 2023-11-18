import React, { Component } from 'react'

export default class Movies_items extends Component {
    render() {
        return (
            <div>
                <div className="card text-white bg-dark" style={{ width: "15rem" }}>
                    <img src={this.props.posterImg} className="card-img-top" alt="Poster" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.movieTitle}</h5>
                        <p className="card-text">📅{this.props.release_date}</p>
                        <p className="card-text">{this.props.description}</p>
                        <p className="card-text">⭐{this.props.vote_average}</p>
                        <a href={`https://www.themoviedb.org/movie/${this.props.movie_Id}/videos?active_nav_item=Trailers`} rel="noreferrer" className="btn btn-primary" target='_blank'>Watch Now</a>
                    </div>
                </div>

            </div>
        )
    }
}

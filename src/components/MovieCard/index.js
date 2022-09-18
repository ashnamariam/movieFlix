import React, { useState, useEffect } from "react";
import MovieDetailsPopup from "../MovieDetailsPopup";
import './style.css'
const MovieCard = ({ data }) => {
    const releaseDate = (new Date(data.releaseDate)).getFullYear();
    const [showDetailsPopup, setShowDetailsPopup] = useState(false);

    const onClose = () => {
        setShowDetailsPopup(false)
    }
    return (
        <div>
            <div onClick={() => setShowDetailsPopup(true)}>
                <img src={data.posterImage} width="85.5%" height='393px'></img>
                <div className="details">{data.title}</div>
                <div className="details">{releaseDate}</div>
            </div>
            {showDetailsPopup &&
                <MovieDetailsPopup releaseDate={releaseDate} data={data} onClose={onClose}></MovieDetailsPopup>
            }
        </div>

    )
}

export default MovieCard;
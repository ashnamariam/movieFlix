import React, { useState } from "react";
import './style.css';
import Modal from 'react-modal';
import CloseIcon from '../../assets/images/Close.png';
const MovieDetailsPopup = ({ data, onClose, releaseDate }) => {

  return (
      <Modal
        isOpen={true}
        className="modal"
        overlayClassName="overlay"
      >
           <div className="closeButton" onClick={() => onClose()}
          >
            <img src={CloseIcon}></img>
          </div>
        <div className="moviePupup">
       
          <img src={data.posterImage} width="266px" height='380px'></img>
          <div className="rightContent">
            <div>
              <span className="title">{data.title} </span>
              <span className="year">{`(${releaseDate})`}</span>
            </div>
            <div className="genre">Genre: <span>{data.genres.join(',')}</span></div>
            <div className="overview">{data.overview}</div>

          </div>

        </div>

      </Modal>
  )
}

export default MovieDetailsPopup;
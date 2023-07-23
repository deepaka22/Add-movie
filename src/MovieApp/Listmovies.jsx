import { useState, useEffect } from "react";
import "./Listmovies.css";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LikeDislike from "./LikeDislike";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";


const Listmovies = ({ index, names, posters, summarys, ratings, deleteButton, editButton  }) => {






  // styling part

  const styles = {
    color: ratings <= 8 ? "#d50000" : "green",
  };

  const [para, Setpara] = useState(0);

  const parastyling = {
    display: para ? "block" : "none",
    marginTop: "1.5rem",
  };

  // ends here

  const navi = useNavigate();
  

  return (
    <div>
      <div className="card mt-4" id="poster-size">
        <img
          src={posters}
          class="card-img-top"
          id="poster-container"
          height={450}
          alt="movie-poster"
        />
        <div className="card-body">
          <div className="rating-flex">
            <h5>
              {names} &nbsp;
              {para ? (
                <KeyboardArrowUpIcon
                  className="align-items-center"
                  onClick={() => {
                    Setpara(!para);
                  }}
                ></KeyboardArrowUpIcon>
              ) : (
                <KeyboardArrowDownIcon
                  className="align-items-center"
                  onClick={() => {
                    Setpara(!para);
                  }}
                ></KeyboardArrowDownIcon>
              )}
              <IconButton 
              onClick={()=>{
                navi(`/movies/${index}/info`)
              }}>
              <i class="fa-solid fa-circle-info fa-xs" style={{color: "#206cee"}}></i>
              </IconButton>
              
            </h5>
            <h5 style={styles}>
              <i class="fa-solid fa-star fa-xs " id="star-style"></i> &nbsp;
              {ratings}
            </h5>
          </div>

          <p style={parastyling} className="card-text">
          {" "}  {summarys}
          </p>
        </div>
        
       <LikeDislike btn = {deleteButton} editbtn = {editButton}   className="d-flex"/>
       
       
      </div>
    </div>
  );
};

export default Listmovies;

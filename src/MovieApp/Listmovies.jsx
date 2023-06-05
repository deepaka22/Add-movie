import { useState } from "react";
import "./Listmovies.css";

const Listmovies = ({ names, posters, summarys, ratings }) => {
  const styles = {
    color: ratings <= 8 ? "#d50000" : "green",
  };

  const [para , Setpara] = useState(0);

  const parastyling = {
    display :  para ? "block" : "none",
  }
  

  return (
    <div>
      <div className="card" id="poster-size">
        <img
          src={posters}
          class="card-img-top"
          id="poster-container"
          height={450}
          alt="movie-poster"
        />
        <div className="card-body">
          <div className="rating-flex">
            <h5>{names}</h5>
            <h5 style={styles}>
              <i class="fa-solid fa-star fa-xs " id="star-style"></i> &nbsp;
              {ratings}
            </h5>
          </div>
<button onClick={()=>{Setpara(!para)}}>Toggle summary</button>
 <p style={parastyling} className="card-text">{summarys} </p>
        </div>
        <div>
          <button id="btn-pad"> <i class="fa-solid fa-thumbs-up"></i>&nbsp;Like</button>
          <button id="btn-pad"><i class="fa-solid fa-thumbs-down" ></i>&nbsp;Dislike</button>
        </div>
      </div>
    </div>
  );
};

export default Listmovies;

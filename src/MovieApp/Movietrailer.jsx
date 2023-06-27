import { useNavigate, useParams } from "react-router-dom";
import './Movietrailer.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState, useEffect } from "react";

const Movietrailer = ({}) => {

  const [move, setmove] = useState([]);

  
  const { id } = useParams();

  console.log(id);

// console.log(id);

  useEffect(() => {

fetch(`https://648c47ba8620b8bae7ec9aab.mockapi.io/movies/${id}`)
    .then((datas) => {
        return datas.json();
      })
      .then((datas) => {
        setmove(datas);
        // console.log(datas);
      });
  }, []);


    const styles = {
        color: move.rating <= 8 ? "#d50000" : "green",
        width :"20%",
      };


  const naving = useNavigate();


  // console.log(id);

  // const movieinfo = move[id];

  // console.log(movieinfo);

  return (
    <div className="mt-4">
      
      <iframe className="px-2"
        id="movie-trailer-container"
        src={move.trailer}
        title="LEO - Bloody Sweet Promo | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // allowfullscreen
      ></iframe>
      <div className="d-flex align-items-center">
      <h3 className=" px-2 py-2" style={{width: "80%"}}>Movie : {move.name}</h3>
      <h5 style={styles}>
              <i class="fa-solid fa-star fa-xs " id="star-style"></i> &nbsp;
              {move.rating}
            </h5>
      </div>
      <div className="px-2">
        <p >
          {" "} <i>{move.summary}</i>
          </p>
        </div>

      <div className="text-start px-2 py-2">
        <button
          className=" btn btn-danger"
          onClick={() => {
            naving("/movies");
          }}
        >
         <ArrowBackIosIcon/> Go Back
        </button>
      </div>
    </div>
  );
};

export default Movietrailer;

import { useNavigate, useParams } from "react-router-dom";
import './Movietrailer.css'

const Movietrailer = ({ Moviedata }) => {

    const styles = {
        color: Moviedata.rating <= 8 ? "#d50000" : "green",
        width :"20%",
      };


  const naving = useNavigate();

  const { id } = useParams();

  // console.log(id);

  const movieinfo = Moviedata[id];

  // console.log(movieinfo);

  return (
    <div >
      
      <iframe className="px-2"
        id="movie-trailer-container"
        src={movieinfo.trailer}
        title="LEO - Bloody Sweet Promo | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // allowfullscreen
      ></iframe>
      <div className="d-flex align-items-center">
      <h3 className=" px-2 py-2" style={{width: "80%"}}>Movie : {movieinfo.name}</h3>
      <h5 style={styles}>
              <i class="fa-solid fa-star fa-xs " id="star-style"></i> &nbsp;
              {movieinfo.rating}
            </h5>
      </div>
      <div className="px-2">
        <p >
          {" "} <i>{movieinfo.summary}</i>
          </p>
        </div>

      <div className="text-start px-2 py-2">
        <button
          className=" btn btn-success"
          onClick={() => {
            naving("/movies");
          }}
        >
          BACK TO HOME PAGE
        </button>
      </div>
    </div>
  );
};

export default Movietrailer;

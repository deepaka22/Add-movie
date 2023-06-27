import { useNavigate } from 'react-router-dom';
import './Navbar.css';

import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { light } from '@mui/material/styles/createPalette';


const Navbar = ({mode,setmode})=>{

    const navigate =  useNavigate();

    return(
        <div>
          <nav class="navbar navbar-expand-lg bg-primary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
               <b> TEKENZEE MOVIES</b>
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav align-items-center">
                  <li class="nav-item">
                    <button
                      className="btn nav-link"
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                    <b>  HOME</b>
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      className="btn nav-link"
                      onClick={() => {
                        navigate("/Addmovies");
                      }}
                    >
                      <b>ADD MOVIE</b>
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      className="btn nav-link"
                      onClick={() => {
                        navigate("/movies");
                      }}
                    >
                      <b>MOVIES</b>
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      className="btn nav-link"
                      onClick={() => {
                        navigate("/game");
                      }}
                    >
                     <b> COLORGAME</b>
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      className="btn nav-link "
                      onClick={() => {
                            setmode(mode === "light" ? "dark" : "light")
                    }}
                    >
                      <b style={{textTransform: "uppercase"}}>{mode}{" "}MODE{" "}&nbsp;</b>
                    
                      {mode == "dark" ? (
                        <NightlightIcon style={{marginBottom:'0.3rem', padding:'0.1rem'}} />
                      ) : (
                        <LightModeIcon style={{marginBottom:'0.4rem'}} />
                      )} 

                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    )
}

export default Navbar;

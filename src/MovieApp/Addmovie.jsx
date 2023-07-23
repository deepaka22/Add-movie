import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import App from "../App";
import { Height, ImportExport, Padding } from "@mui/icons-material";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useEffect } from "react";

const Addmovie = ({Moviedata, SetData})=>{

    const style = {
        margin : "0.8rem 0 0.8rem 0.2rem",
        display:"flex",
        flexDirection: "column",
        gap:"1rem",
        alignItems:"center",
    }

    const styleinp={
        
    marginRight:"0.2rem",
    height:"40px",
    width:"310px",
    marginTop:"0.2rem",
    marginBottom:"0.2rem",
       
    }

const [name, setname] = useState ('');
const [poster, setposter] = useState ('');
const [Summary, setSummary] = useState ('');
const [Ratings, setRatings] = useState (null);
const [trailer, settrailer] = useState ('');

const navigatingMovies = useNavigate();

const Addingmoviebtn = ()=>{

    const newmovie = {name:name, poster:poster, summary:Summary, rating:Ratings,trailer:trailer };
    // SetData([...Moviedata, newmovie]);

   
        fetch("https://648c47ba8620b8bae7ec9aab.mockapi.io/movies", {
            method:"POST",
            headers: {
                "Content-type" : "application/json",
            },
            body : JSON.stringify(newmovie)
            }).then(()=>navigatingMovies('/movies'))
        
    

    
}

    return( 

<div style={style}>

<TextField id="standard-error"
          label="Movie Name"
          type="search"
          variant="standard"
          required
        //   id="standard-error"
         style={styleinp}

onChange={(event)=>{setname(event.target.value)}}/>

<TextField id="standard-search"
          label="Movie Poster"
          type="search"
          variant="standard"
          required
         style={styleinp}

onChange={(event)=>{setposter(event.target.value)}}
/>

<TextField id="standard-search"
          label="Movie Summary"
          type="search"
          variant="standard"
         style={styleinp} 
         required
onChange={(event)=>{setSummary(event.target.value)}}
/>

<TextField id="standard-search"
          label="Trailer"
          type="search"
          variant="standard"
         style={styleinp} 
         required
onChange={(event)=>{settrailer(event.target.value)}}
/>


<TextField id="standard-search"
          label="Rating"
          type="search"
          variant="standard"
          required
         style={styleinp}
            
onChange={(event)=>{setRatings(event.target.value)}}/>
        
        <Button variant="contained" 
         onClick={()=>Addingmoviebtn()}>Add movie</Button>


</div>
    )
}

export default Addmovie;


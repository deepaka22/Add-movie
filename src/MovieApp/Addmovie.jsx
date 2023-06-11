import { useState } from "react";

import App from "../App";
import { Height, Padding } from "@mui/icons-material";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
          label="Rating"
          type="search"
          variant="standard"
          required
         style={styleinp}
            
onChange={(event)=>{setRatings(event.target.value)}}/>
        
        <Button variant="contained" 
         onClick={(event)=>{
            const newmovie = {name:name, poster:poster, summary:Summary, rating:Ratings };
            SetData([...Moviedata, newmovie]);
        }}>Add movie</Button>


</div>
    )
}

export default Addmovie;
import { useState } from "react";

import App from "../App";
import { Height, Padding } from "@mui/icons-material";

const Addmovie = ({Moviedata, SetData})=>{

    const style = {
        margin : "0.8rem 0 0.8rem 0.2rem",
        display:"flex",
        flexDirection: "column",
        gap:"1rem",
        alignItems:"center",
    }

    const styleinp={
        border:"2px solid black",
        paddingLeft:"0.5rem",
    marginRight:"0.2rem",
    height:"40px",
    width:"300px",

       
    }

const [name, setname] = useState ('');
const [poster, setposter] = useState ('');
const [Summary, setSummary] = useState ('');
const [Ratings, setRatings] = useState (null);



    return( 
<div style={style}>

<label htmlFor="Moviename" > <b>Movie Name</b></label>       
<input style={styleinp} id="Moviename" type="text" 
onChange={(event)=>{setname(event.target.value)}}/>

<label htmlFor="Movie-poster" > <b> Movie poster</b>  </label>
<input style={styleinp} type="text"  id="Movie-summary" 
onChange={(event)=>{setposter(event.target.value)}}
/>

<label htmlFor="Movie-summary " > <b> Movie Summary </b> </label>
<input style={styleinp} type="text" id="Movie-poster" 
onChange={(event)=>{setSummary(event.target.value)}}
/>

<label htmlFor="Movie-ratings" > <b> Movie Ratings </b> </label>
<input style={styleinp} type="text" id="Movie-ratings" 
onChange={(event)=>{setRatings(event.target.value)}}/>
        
        <button onClick={(event)=>{
            const newmovie = {name:name, poster:poster, summary:Summary, rating:Ratings };
            SetData([...Moviedata, newmovie]);
        }}>Add movie</button>

        {/* <div>{name}-{poster}-{Summary}-{Ratings}</div>   */}

</div>
    )
}

export default Addmovie;
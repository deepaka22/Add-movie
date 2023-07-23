import { useState } from "react";
import "./Listmovies.css";


import Badge from '@mui/material/Badge';

const LikeDislike = ({btn, editbtn})=>{

    const [like, Setlike] = useState(0);
  const [dislike, setdislike] = useState(0);

  const styling = {
    marginRight : "4.5rem"
  } 


    return(
      <div className="d-flex " >
                <div className="text-start mb-4 mt-3" style={styling}>
    <Badge  color="error" overlap="circular"  badgeContent= {like} className="mx-1">
           <button className="btn btn-outline-primary"    onClick={()=>{
            Setlike(like + 1);
          }}>
        <i class="fa-solid fa-thumbs-up fa-lg"></i>
          </button>
          </Badge >
          
          <Badge  color="primary" overlap="circular" className="mx-1"
             badgeContent= {dislike}>
               <button className="btn btn-outline-danger" onClick={()=>{
            setdislike(dislike + 1);
          }}>
          
            <i class="fa-solid fa-thumbs-down fa-lg"></i>
          </button>
          </Badge >

          </div>
          <div className=" mb-4 mt-3 ">
          
          {editbtn}

          {btn} 
          
          </div >     
          </div>

    )
}

export default LikeDislike;
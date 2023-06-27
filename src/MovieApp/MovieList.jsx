
import Listmovies from './Listmovies';
import { useEffect,useState } from "react";


import './Listmovies.css'


const MovieList = ({})=>{

    const [Data, SetData] = useState([]);

  useEffect(() => {
    fetch("https://648c47ba8620b8bae7ec9aab.mockapi.io/movies")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        SetData(data);
        // console.log(data);
      });
  }, []);



    return(
        <div className='flex-property'>
        {Data.map((ele, i)=>(  
     <Listmovies key={i}  index= {ele.id}  names= {ele.name} posters = {ele.poster} summarys={ele.summary} ratings = {ele.rating}/>
        ))}
        
        </div>
    )
}
export default MovieList;
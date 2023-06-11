
import Listmovies from './Listmovies';

import './Listmovies.css'


const MovieList = ({Moviedata})=>{


    return(
        <div className='flex-property'>
        {Moviedata.map((ele, i)=>(  
     <Listmovies key={i}  index= {i}  names= {ele.name} posters = {ele.poster} summarys={ele.summary} ratings = {ele.rating}/>
        ))}
        
        </div>
    )
}
export default MovieList;
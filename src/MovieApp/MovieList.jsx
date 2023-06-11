
import Listmovies from './Listmovies';

import './Listmovies.css'


const MovieList = ({Moviedata})=>{


    return(
        <div className='flex-property'>
        {Moviedata.map((ele, i)=>(          
    // <div key={i}>
    <Listmovies key={i}  indexes={i}  names= {ele.name} posters = {ele.poster} summarys={ele.summary} ratings = {ele.rating}/>
//  </div>
        ))}
        
        </div>
    )
}
export default MovieList;
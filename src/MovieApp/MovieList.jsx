
import Listmovies from './Listmovies';
import { useEffect,useState } from "react";
import Badge from '@mui/material/Badge';


import './Listmovies.css'


const MovieList = ({})=>{

    const [Data, SetData] = useState([]);

 


    const getmovies = ()=>{

      fetch("https://648c47ba8620b8bae7ec9aab.mockapi.io/movies")

      .then((data) => {
        return data.json();
      })
      .then((data) => {
        SetData(data);      
      });
    } 
 
  
  
    const deletmovies =  (id, name)=> {

    const alerting = window.confirm(`Are you sure, you want to delete ${name}`)

    if(alerting === true){
 
    fetch(`https://648c47ba8620b8bae7ec9aab.mockapi.io/movies/${id}`, {method: 'DELETE'}).then((data)=>{
    return  data.json()
  }).then(()=>  getmovies())

}else{
      getmovies();
    }
    }



    const editmovies = (id, name, poster, summary, rating)=>{

      const alerting = window.confirm(`Are you sure, you want to edit ${name}`)

      if(alerting===true){
        const userPrompt = prompt('what Would you like edit in this ? name or rating', 'name')

        if (userPrompt== 'name'){

          const userNameprompt = prompt('kindly enter the movie name')

          const editedname = {name: userNameprompt}

          fetch(`https://648c47ba8620b8bae7ec9aab.mockapi.io/movies/${id}`,
           {method: 'PUT',
           headers: {"Content-type" : "application/json"},
           body : JSON.stringify(editedname)
           }).then((data)=>{
            return  data.json()
          }).then(()=>  getmovies())
         
        
        }

        if (userPrompt== 'rating'){

          const userratingprompt = prompt('kindly enter the ratings')

          if(userratingprompt <=10) {

          const editedrating = {rating: userratingprompt}

          fetch(`https://648c47ba8620b8bae7ec9aab.mockapi.io/movies/${id}`,
           {method: 'PUT',
           headers: {"Content-type" : "application/json"},
           body : JSON.stringify(editedrating)
           }).then((data)=>{
            return  data.json()
          }).then(()=>  getmovies())
         
        }
        else{

          window.alert('Enter valid rating less than 10');

        }
        
        }


       
      }
      

    }
    

    useEffect( ()=>getmovies(), [])


    return(
        <div className='flex-property'>
        {Data.map((ele, i)=>(  
     <Listmovies
      key={i} 
      index= {ele.id}
      names= {ele.name}
      posters = {ele.poster}
      summarys={ele.summary} 
      ratings = {ele.rating}    

     editButton = {<Badge  color="error" overlap="circular" className="mx-1">
     <button onClick={()=>{
       editmovies(ele.id, ele.name, ele.poster,ele.summary, ele.rating)}} className="btn btn-outline-warning"   >
     <i class="fa-solid fa-pen-to-square fa-3xs"></i> 
    </button>
    </Badge >} 
    
    deleteButton = {<Badge  color="error" overlap="circular" className="mx-1">
      <button onClick={()=>{
        deletmovies(ele.id, ele.name)}} className="btn btn-outline-danger"   >
      <i class="fa-solid fa-trash "></i>
     </button>
     </Badge >}
     />     
            ))}
        
        </div>
    )
}
export default MovieList;
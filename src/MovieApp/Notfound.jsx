import { useNavigate } from 'react-router-dom';
import './Notfound.css'

const Notfound = ()=>{

    const naving = useNavigate();

    return (
        <div>
        <div className="container-sm" id="width-animation">
            <img src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif" height={500}/>      
         </div>
         <div className='text-end px-4'>
        <button className=' btn btn-success  p-4 mb-2 ' 
        onClick={()=>{
            naving("/movies")
        }}>
        BACK TO HOME PAGE
        </button>
        </div>
                   </div>
                   )
}

export default Notfound;
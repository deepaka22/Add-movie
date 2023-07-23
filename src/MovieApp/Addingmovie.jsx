

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Formik, useFormik } from 'formik';
import { object, string, number, date, InferType } from 'yup';
import { useNavigate } from 'react-router-dom';



const Addingmovie = ()=>{
    
    const navigatingMovies = useNavigate();

    
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

const paraStylings ={
    color : "Red",
}

const movieValidation  = object({
    name: string().required().min(2),
    poster: string().required().min(5),
    summary: string().required().min(16),
    trailer: string().required().min(5),
    rating: number('Rating Must be a number').max(10,"Rating Must be a equal or less than 10"),
  });
  
const {values, handleChange, handleSubmit, errors, handleBlur, touched } = useFormik({
          initialValues : {name:"", poster:'', summary :'', trailer : '', rating:''},
          validationSchema: movieValidation,
          onSubmit: (values, actions)=>{

            // console.log(values);

            fetch("https://648c47ba8620b8bae7ec9aab.mockapi.io/movies", {
                method:"POST",
                headers: {
                    "Content-type" : "application/json",
                },
                body : JSON.stringify(values)
                }).then(()=>{actions.resetForm()}).then(()=>navigatingMovies('/movies'))
            
        

                
            
          }
})

    return(
      
<form onSubmit={handleSubmit}>
<div style={style}>

<TextField id="standard-error"
          label="Movie Name"
          type="search"
          variant="standard"
          required  
          name='name'
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
         style={styleinp}
/>
<p style={paraStylings}>{touched.name && errors.name ? errors.name : null}</p>

<TextField id="standard-search"
          label="Movie Poster"
          type="search"
          variant="standard"
          required
          name='poster'
          value={values.poster}
          onChange={handleChange}
          onBlur={handleBlur}
           style={styleinp}
/>
<p style={paraStylings}>{touched.poster && errors.poster ? errors.poster : null}</p>

<TextField id="standard-search"
          label="Movie Summary"
          type="search"
          variant="standard"
          required
          name='summary'
          value={values.summary}
          onChange={handleChange}
          onBlur={handleBlur}
          style={styleinp}         
/>
<p style={paraStylings}>{touched.summary && errors.summary ? errors.summary : null}</p>

<TextField id="standard-search"
          label="Trailer"
          type="search"
          variant="standard"
          required
          name='trailer'
          value={values.trailer}
          onChange={handleChange}
          onBlur={handleBlur}
         style={styleinp} 
/>
<p style={paraStylings}>{touched.trailer && errors.trailer ? errors.trailer : null}</p>


<TextField id="standard-search"
          label="Rating"
          type="search"
          variant="standard"      
         required
         name='rating'
         value={values.rating}
         onChange={handleChange}
         onBlur={handleBlur}
         style={styleinp}
           />
<p style={paraStylings}>{touched.rating && errors.rating ? errors.rating : null}</p>
        
        <Button variant="contained" type='submitt'>Add movie</Button>
        </div> 
        </form>
    )}
   

export default Addingmovie;
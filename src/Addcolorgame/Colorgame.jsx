import { useState } from "react"


const Colorgame=()=>{

const [stylestate, Setstylestate] = useState([""]);

const [Colorlist, setColorlist] = useState(["orange", "lightblue", "green", "crimson"]);

// Colorlist.push(stylestate);

const styles = {

    marginTop:"1rem",
    width:"250px",
    height: "35px",
    backgroundColor: stylestate,
    paddingLeft:"0.2rem",
    marginRight:"0.2rem"
}



const btnstyle = {
    width:"90px",
    height: "36px",

}

    return(
     <div className="container-xxl"> 
        <input 
        placeholder="type the color name"
        style={styles}
        value={stylestate}
        onChange={(event)=>{Setstylestate(event.target.value)}}/> 
        <button style={btnstyle} 
       onClick={()=>{
        setColorlist ([...Colorlist, stylestate])
       }}
        >Add color</button>
        
        {Colorlist.map((ele, index)=>(

            <Addcolor key = {index} clr = {ele}/>
        ))}
     </div>
)}

export default Colorgame;



const Addcolor = ({clr})=>{

    const styles2 = {
    
        width:"250px",
        height: "35px", 
        backgroundColor: clr,
        paddingLeft:"0.2rem",
        marginTop:"1rem",
    }
    

    return (
        <div style={styles2}> 

        </div>
    )
}
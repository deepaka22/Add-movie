import './Welcome.css';

function Welcome (props){
    const {names, pics} = props;


    return (
        <div>
            <div className="villain">
            <img className='vil'  height={100}  width={100} src={pics}/>
            </div>
             <h1 className='text-center'> {names} </h1>
        </div>
    )
}

export default Welcome;
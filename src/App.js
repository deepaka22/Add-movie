
import Welcome from "./Welcome";

function App() {

  

  return (
    <div className="App">

     <Welcome names='javascript' pics="https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg"/>
     <Welcome names='HTML 10' pics="https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg"/>
     <Welcome names='CSS 5' pics="https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg" />
    </div>
  );
}

export default App;
import MovieList from "./MovieApp/MovieList";
import "./App.css";
import Addmovie from "./MovieApp/Addmovie";
import Colorgame from "./Addcolorgame/Colorgame";
import { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Welcome from "./MovieApp/Welcome";
import Notfound from "./MovieApp/Notfound";
import Movietrailer from "./MovieApp/Movietrailer";
import Navbar from "./MovieApp/Navbar";
// import { createContext } from "react";
// import { useNavigate } from "react-router-dom";
import "./MovieApp/Navbar.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ContactlessOutlined } from "@mui/icons-material";
import { useEffect } from "react";

function App() {
  const [mode, setmode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <div className="App">
          <Navbar mode={mode} setmode={setmode} />
          <Routes>
            <Route path="/" element={<Welcome />}></Route>
            <Route
              path="/Addmovies"
              // element={<Addmovie SetData={SetData} Moviedata={Data} />}
              element={<Addmovie />}
            ></Route>
            <Route
              path="/movies"
              // element={<MovieList Moviedata={Data} />}
              element={<MovieList />}
            ></Route>
            <Route
              path="/films"
              element={<Navigate replace to="/movies" />}
            ></Route>
            <Route
              path="/movie"
              element={<Navigate replace to="/movies" />}
            ></Route>
            <Route path="/game" element={<Colorgame />}></Route>
            <Route
              path="/movies/:id/info"
              // element={<Movietrailer Moviedata={Data} />}
              element={<Movietrailer />}
            ></Route>
            <Route path="*" element={<Notfound />}></Route>
          </Routes>
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;

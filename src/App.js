import React, { useEffect, useState } from "react";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, FormControl, Button} from 'react-bootstrap';
import "./style.css";
import Movie from "./Movie";


const App = () => {

    const [query, setQuery] = useState('Avengers');
    const [popular, setPopular] = useState([]);

    const url =
    `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${query}`;       


const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
  };

  
  useEffect(() => {
    setQuery(query);
    fetchPopular();
}, []);

return (
  <MDBRow>
      <h1>Movies</h1>
      <div className="Container">
      <div class="form-group">        
      <input type="text" class="form-control" placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={fetchPopular}
            value={query}/>
            <button type="submit" class="btn btn-default btn-primary" 
            onClick={fetchPopular}>Submit</button>  
            </div> 
  </div>            
     <MDBCol sm='6' md='4'>
        {popular?.map((movie) => {
          return <Movie movie={movie} />;
        })}
      </MDBCol>  
  </MDBRow>        
  );
};
export default App;
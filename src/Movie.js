import React from "react";
import {MDBContainer, MDBCardGroup, MDBCard, MDBCardBody, MDBCardTitle,  MDBCardImage} from 'mdb-react-ui-kit';

import "./App.css";
const Movie = ({movie}) => {
  const { title, poster_path, path } = movie;
  return (  
   
    <MDBContainer className="mt-3">    
      <MDBCardGroup>    
       <MDBCard style={{ width: '100em' }} style={{flex: 1}}>
       <MDBCardBody>
       
             <MDBCardTitle>{movie.title}</MDBCardTitle>

             <MDBCardImage src={"https://image.tmdb.org/t/p/w400" + movie.poster_path } alt={movie.path} position="top"/>               

        </MDBCardBody>    
    </MDBCard>    
    </MDBCardGroup>
    </MDBContainer>  
     
  );
};
export default Movie;
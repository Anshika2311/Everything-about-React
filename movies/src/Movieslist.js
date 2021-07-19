import React,{useContext} from 'react';
import { Moviesprovider } from './Moviescontext';

function Movieslist(){

    const obj=useContext(Moviesprovider)

    const movieslist=obj.movies.map((movie)=>{

        return<div style={{backgroundColor:"yellow"}}>
            <h1>{movie.moviename}</h1>
            <h3>Directed By:{movie.directorname}</h3>
        </div>

    })

    return<div style={{backgroundColor:"green"}}>
        <h1>Movies List</h1>
        {movieslist}
    </div>
}

export default Movieslist;
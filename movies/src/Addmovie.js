import React,{useContext, useState} from 'react';
import { Moviesprovider } from './Moviescontext'

function Addmovie(){

    const[moviename,setmoviename]=useState('')
    const[directorname,setdirectorname]=useState('')

    const obj=useContext(Moviesprovider)

    function add(){

        var movie={
            moviename:moviename,
            directorname:directorname
        }
        obj.addmovie(movie)
    }

    return<div>

        <h1>Add Movie</h1>
        
        <input type="text" placeholder="Movie name" value={moviename} onChange={(e)=>{setmoviename(e.target.value)}}/><br/>
        <input type="text" placeholder="Director name" value={directorname} onChange={(e)=>{setdirectorname(e.target.value)}}/><br/>
        <button onClick={add}>ADD MOVIE</button>
    </div>
}

export default Addmovie;
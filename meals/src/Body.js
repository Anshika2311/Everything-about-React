import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './Body.css'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Body(){

    const[items,setitems]=useState([])

    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then((response)=>{

            console.log(response.data)
            setitems(response.data.meals)

        }).catch((error)=>{
            console.log(error)
        })
    },[])

    const itemslist=items.map((item)=>{

        return <div className="col-md-4">

            <p>{item.strMeal}</p>
            <img src={item.strMealThumb}/>
            <p>{item.idMeal}</p>

        </div>

    })

    return<div>
        
        <div className="row">
            {itemslist}
        </div>

    </div>
}

export default Body;
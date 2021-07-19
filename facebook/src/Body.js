import React,{useState} from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Body.css'

function Body(){

    const[name,setname]=useState("")
    const[username,setusername]=useState("")
    const[password,setpassword]=useState("")

    function registeruser(event){

        event.preventDefault()

        var users=JSON.parse(localStorage.getItem('users')||"[]")
        
        var newuser={

            name:name,
            username:username,
            password:password

        }

        users.push(newuser)

        localStorage.setItem('users',JSON.stringify(users))

        alert("registration successful")

    }


    return<div>

        <div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <img src="https://www.fifteendesign.co.uk/wp-content/uploads/2019/05/facebook-messages-connections-updates-1.jpg"/>
                </div>
                <div className="col-md-4">
                
                <h1 className="m-5 pt-5">Registration</h1>

                    <form onSubmit={registeruser}>
                        <input type="text" placeholder="name" className="form-control" value={name} onChange={(e)=>{setname(e.target.value)}}/>
                        <input type="text" placeholder="username" className="form-control"value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                        <input type="text" placeholder="password" className="form-control" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                        <input type="submit" className="btn btn-primary" value="SIGN UP"/>
                    </form>
                </div>  
            </div>
        </div>

    </div>

}

export default Body
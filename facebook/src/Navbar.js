import React,{useState} from 'react';
import './Navbar.css'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from 'react-router-dom';

function Navbar(){

    const[username,setusername]=useState("")
    const[password,setpassword]=useState("")
    const history=useHistory()


    function logout(){
        localStorage.removeItem('loggedin')
        history.push('/')
        window.location.reload(true)
    }

    function login(){

        var users=JSON.parse(localStorage.getItem('users'))

        var i=0;
        for(var user of users){

            if(user.username==username && user.password==password){

                i++;

            }

        }

        if(i==1){
            alert("Login successfull")
            localStorage.setItem('loggedin','loggedin')
            history.push("/dashboard")
            window.location.reload(true)
        }
        else{
            alert("Invalid login")
        }

    }

    return <div>

        <div className="row nav">
            <div className="col-md-6">
                    <h1>Facebook</h1>
            </div>
            <div className="col-md-6">
            {   
            (()=>{

                if(localStorage.getItem("loggedin"))
                {
                    return<button onClick={logout}>Log Out</button>
                }

                else{
                    return <div>
                         <input type="text" placeholder="username" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                        <input type="text" placeholder="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                        <button onClick={login}>Login</button>
                        </div>
                }

            })()
            }
            </div>
        </div>
    </div>
}
export default Navbar;
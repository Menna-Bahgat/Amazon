import React, { useState } from 'react'
import logoo from './../images/login-logo.png'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import'./Login.css'



const Login = () => {
  const [email, setemail] = useState()
  const [Password, setpassword] = useState()
  
  return (
    <div className='login'>
        <Link to="/">
          <img className='login-logo' src={logoo} alt=""/>
        </Link>
        <Card style={{ width: '22rem' }}>
            <Card.Body className='maincard'>
                <h2>Sign in</h2>
                <div className='card-contain'>
                    <div>
                        <h6>E-mail</h6>
                        <input type='email' value={email} onChange={(e)=> setemail(e.target.value)}/>
                    </div>
                    <div>
                        <h6>Password</h6>
                        <input type='Password' value={Password}  onChange={(e)=> setpassword(e.target.value)}/>
                    </div>
                </div>
                <button style={{backgroundColor:"#C98D50", border:"0"}}>Sign in</button>
                <p>By Continuing, you agree to Amazon`s fake clone conditions of Use and Privecy Notice.</p>
                <button>Create Your Amazon Account</button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Login
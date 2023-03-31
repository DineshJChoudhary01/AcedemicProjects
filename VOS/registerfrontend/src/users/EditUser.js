import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link,useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {

    let navigate=useNavigate()

    const {id}=useParams()

    const [user, setUser]=useState({

        username:"",
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        phoneno:"",
        address:"",
        role:""
    })

    const {username,firstname,lastname,email,password,phoneno,address,role}=user


    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    };

    useEffect(()=>{
        loadUser()
    },[])
    const onSubmit=async (e)=>{
        e.preventDefault()
        await axios.put(`http://localhost:8080/user/${id}`,user)
        navigate("/")
    }

    const loadUser=async()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`) 
        setUser(result.data)
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Edit</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Username' className='form-label'>Username</label>
                    <input type={"text"}
                    className="form-control"
                    placeholder='Enter your User Name'
                    name="username"
                    value={username}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Firstname' className='form-label'>Firstname</label>
                    <input type={"text"}
                    className="form-control"
                    placeholder='Enter your First name'
                    name="firstname"
                    value={firstname}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Lastname' className='form-label'>Lastname</label>
                    <input type={"text"}
                    className="form-control"
                    placeholder='Enter your Last Name'
                    name="lastname"
                    value={lastname}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Email' className='form-label'>Email</label>
                    <input type={"text"}
                    className="form-control"
                    placeholder='Enter your Email'
                    name="email"
                    value={email}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Password' className='form-label'>Password</label>
                    <input type={"text"}
                    className="form-control"
                    placeholder='Enter your password'
                    name="password"
                    value={password}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Phoneno' className='form-label'>Phoneno</label>
                    <input type={"text"}
                    className="form-control"
                    placeholder='Enter your Phone No'
                    name="phoneno"
                    value={phoneno}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Address' className='form-label'>Address</label>
                    <input type={"text"}
                    className="form-control"
                    placeholder='Enter your address'
                    name="address"
                    value={address}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>Role</label>
                    <input type={"text"}
                    className="form-control"
                    placeholder='Enter your role'
                    name="role"
                    value={role}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <button type="submit" className='btn btn-outline-primary'>Submit</button>
                <Link  className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                </form>
            </div>
            
        </div>
    </div>
  )
}

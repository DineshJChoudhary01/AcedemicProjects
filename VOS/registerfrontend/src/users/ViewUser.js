import React, { useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import { useState } from 'react'
import axios from "axios"

export default function ViewUser() {

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

    const {id}=useParams();
    useEffect(()=>{
        loadUser()
    },[])

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
      }
      

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Details</h2>

                    <div className='card'>
                        <div className='card-header'>
                        Details of id : {user.id}
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>User Name:</b>
                                {user.username}
                            </li>
                            <li className='list-group-item'>
                                <b>First Name:</b>
                                {user.firstname}
                            </li>
                            <li className='list-group-item'>
                                <b>Last Name:</b>
                                {user.lastname}
                            </li>
                            <li className='list-group-item'>
                                <b>Email:</b>
                                {user.email}
                            </li>
                            <li className='list-group-item'>
                                <b>Phone No:</b>
                                {user.phoneno}
                            </li>
                            <li className='list-group-item'>
                                <b>Password:</b>
                                {user.password}
                            </li>
                            <li className='list-group-item'>
                                <b>Address:</b>
                                {user.address}
                            </li>
                            <li className='list-group-item'>
                                <b>Role:</b>
                                {user.role}
                            </li>
                        </ul>

                        </div>
                    </div>
                    <Link className='btn btn-primary my-2' to={"/"}>Back To Home</Link>
                </div>
            </div>
        </div>
    )
}
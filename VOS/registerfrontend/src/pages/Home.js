import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from "react-router-dom"

export default function Home() {

  const [users, setUsers] = useState([])

  const{id}=useParams()

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/allusers");
    setUsers(result.data)
  }

  const deleteUser=async(id)=>{
    await axios.delete(`http://localhost:8080/user/${id}`)
    loadUsers()
  }



  return (
    <div className='container'>
      <div className='py-4'>
        <table className="table border">
          <thead>
            <tr>
              <th scope="col">Serial No</th>
              <th scope="col">User name</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone No</th>
              <th scope="col">Password</th>
              <th scope="col">Address</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>

            {
              users.map((user, index) => (
                <tr>
                  <th scope="row" key={index}>{index + 1}</th>
                  <td>{user.username}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.phoneno}</td>
                  <td>{user.address}</td>
                  <td>{user.role}</td>

                  <td>
                  <Link className='btn btn-outline-primary mx-2' to={`/viewuser/${user.id}`}>View</Link>
                  <Link className='btn btn-outline-primary mx-2'
                    to={`/edituser/${user.id}`}
                  >Edit</Link>
                  <button className='btn btn-outline-primary mx-2'
                  onClick={()=>deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))
            }



          </tbody>
        </table>
      </div>
    </div>
  );
}


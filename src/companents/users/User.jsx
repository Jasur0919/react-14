import axios from "axios"
import './User.css'
import { useState, useEffect } from "react"
import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { FaPager } from "react-icons/fa6";

const User = () => {
    const [user, setUser] = useState([])
    const [modal , setModal] = useState(false)

    useEffect(() =>  {
        axios
            .get("http://localhost:3000/users")
            .then(res => {
                if(res.status === 200){
                    setUser(res.data)
                }
                console.log(res);
            })
    },[])


  return (
    <>
    <div className="container">
        <h1 className="text-center my-3">User</h1>
        <button className="btn btn-success my-3" onClick={() => setModal(true)}>Add user</button>
        <table className="table table-bordered table-hover table-strip">
            <thead>
                <tr>
                    <th>T/R</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Number</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    user?.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.number}</td>
                            <td className="images"><MdEdit style={{color: "blue", fontSize: "25"}}/>   <FaTrashAlt style={{color: "red", fontSize: "25"}}/>  <FaPager style={{color: "indigo", fontSize: "25"}}/>   </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
        
    </>
  )
}

export default User
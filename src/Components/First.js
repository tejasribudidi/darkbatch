import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'


export default function First() {
    const [list,setList] = useState([])

   useEffect(()=>{
      axios.get('http://localhost:4000/api/getTask')
      .then(res => setList(res.data.list))
   },[])


 // Delete function
 const handleDelete=(_id)=>{
       
    // console.log(_id)
  
  axios.delete('http://localhost:4000/api/deletetask/'+_id)
  .then((response)=>
  {
   if(response.status==200)
   {
    alert("data deleted");
  
    window.location.href='/'
  
   }
   
  })}

  return (
    <>
        <div className='col-md-6'>
            <center>
            <h2 className='first'>To-Do-List</h2>
            </center>
            <br/>
            <table align="center" border={2} height={50} className='table table-bordered'>
                <thead>
                <tr>
                    <th className='second'>Task</th>
                    <th className='second'>Status</th>
                    <th className='second'>Deadline</th>
                    <th className='second'>Actions</th>
                </tr>
                </thead>
                {
                    list.map((e,i)=>{
                        return(
                            <>
                            <tr key={e._id}>
                                <td>{i+1}</td>
                                <td>{e.status}</td>
                                <td>{e.deadline}</td>
                                <td>
                                <Link to={`/edittask/${e._id}`}><button className="btn btn-primary">Edit</button></Link>
                                <Link><button className='btn btn-danger' onClick={()=>handleDelete(e._id)} >Delete</button></Link>
                                </td>
                            </tr>
                            </>
                        )
                    })
                }
            </table>
        </div>
    </>
  )
}

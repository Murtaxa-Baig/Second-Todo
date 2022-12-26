import React, { useState } from 'react'
import './Home.css'
import { array } from '../array/Array'
import { v4 as uuidv4 } from 'uuid';
import View from '../view/View';
export default function Home() {
    const [updatedarray,setUpdatedarray] = useState(array)
    const [name,setName] = useState('')
    const [fname,setFname] = useState('')
    const [email,setEmail] = useState('')
    

    // function of add user
    const addUser= ()=>{
        if (name === '' || fname === '' || email === '') {
            alert("Enter your right name and Father name and mail");
        } 
        else {
            const data = {
                id: uuidv4(),
                name: name,
                fname: fname,
                email: email,

            }
            setUpdatedarray([...updatedarray, data])
            setName("")
            setFname('')
            setEmail('')
        }

    }

    return (
        <div className='body'>
            <h1 className='mainh1'>TODO</h1>
            <div className='contaoner inputdiv'>
                <label for='fn' className='label'>Name:</label>
                <input className='input' type='text' id='fn' 
                value={name}
                onChange={(e)=> setName(e.target.value)}
                 /> <br />
                <label for='sn' className='label'>Father Name:</label>
                <input className='input' type='text' id='sn'
                value={fname}
                onChange={(e)=> setFname(e.target.value)}
                 /> <br />
                <label for="mail" className='label'>E-mail:</label>
                <input className='input' type='email' id='mail' required="required"  autocomplete="Email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                /> <br />
                <button className='addbtn'
                onClick={()=>addUser()}
                >
                    ADD
                </button>
            </div>
            <h1 className='mainh1'>LIST</h1>
            <div className='displaydiv'>
                <table className='table'>
                    <tr>
                        <th className='th'>Name</th>
                        <th className='th'>Father Name</th>
                        <th className='th'>E-mail</th>
                        <th className='th'>Actions</th>
                    </tr>
                    {
                        updatedarray.map((item,index)=>{
                            return(
                    <tr>
                        <td >{item.name}</td>
                        <td >{item.fname}</td>
                        <td >{item.email}</td>
                        <td >
                            <button className='updatebtn'>Update</button>
                            <button className='deletebtn'>Delete</button>
                            <button className='viewbtn'><a href={<View />} target="_blank">View</a></button>
                        </td>
                    </tr>
                        )})
                    }
                </table>

            </div>
        </div>
    )
}

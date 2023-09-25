import React, { useEffect, useState } from 'react'
import Img from './Img';

function Func_lifecycle() {
    //const [name,setName]=useState("Khushi Panchal");

    const [data, setData]=useState({
        name:"khushi@123",
        age:20,
        number:1,
        isImage:true
    })

    useEffect(()=>{
      console.log('DidMount/DidUpdate');
    }, [data.number,data.age,data.name,data.isImage]);

    useEffect(()=>{
      return (()=>{console.log('WillUnMount'); });
    },[]);

  return (
    <div className='container mt-5' >
        <button onClick={()=>setName("Panchal Khushi")}>Change</button>
        <h1>{name}</h1>
        <hr/>
        <button onClick={()=>setUser({...user,username:"Khushi@12",age:19})}>Change</button>
        <h1>Hello My name is {user.username} and my age is {user.age}</h1>
        <hr/>
        <button onClick={()=>setUser({...user,number:user.number+1})}>+</button>
        <h1>{user.number}</h1>
        <button onClick={()=>setUser({...user,number:user.number-1})}>-</button>
        <hr/>

        <button onClick={()=>setUser({...user,isImage:false})}>Hide</button>
        <button onClick={()=>setUser({...user,isImage:true})}>Show</button>
        <button onClick={()=>setUser({...user,isImage:!user.isImage})}>Hide/Show</button>
        <hr/>

        {user.isImage ? <Img/> : null }
    </div>
  )
}

export default Func_lifecycle
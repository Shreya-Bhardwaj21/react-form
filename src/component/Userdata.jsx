import React, { useEffect, useState } from "react";
 export default function Userdata({adduser,update,selectuser,canceledit}) {
    let[name,setName]= useState("");
    let[email,setEmail]= useState("");
    let[address,setAddress]= useState("");
    let[age,setAge]= useState("");
    let[job,setJob]= useState("");
    let[phno,setPhno]= useState('');

    useEffect(()=>{
    if(selectuser){
        setName(selectuser.name);
        setEmail(selectuser.email);
        setAddress(selectuser.address);
        setAge(selectuser.age);
        setJob(selectuser.job);
        setPhno(selectuser.phno);
    }
    },[selectuser]);
    function handlsubmit(e){
        e.preventDefault();
        if(!name||!email||!address||!age||!job||!phno){
            return alert("all input filed is required")
        }
        let userdata ={name,email,address,age,job,phno,id: selectuser?selectuser.id:Date.now()}
        if(selectuser){
            update(userdata);
        }
        else{
           adduser(userdata) 
        }
    }

  return (
    <>
      <section className="conratienr-fluid">
        <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                   <div className="card">
                    <div className="card-header">
                        <h2>{selectuser?"update the user data": "enter the user data"}</h2>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handlsubmit}>
                            <label htmlFor="name">Name:-</label>
                            <input type="text" value={name} className="form-control" id="name" onChange={(e)=>setName(e.target.value)}/>
                            <label htmlFor="email">Email:-</label>
                            <input type="email" value={email} className="form-control" id="email" onChange={(e)=>setEmail(e.target.value)} />
                            <label htmlFor="phno">Phno:-</label>
                            <input type="text" value={phno} className="form-control" id="phno" onChange={(e)=>setPhno(e.target.value)} />
                            <label htmlFor="address">Address:-</label>
                            <textarea type="text" value={address} className="form-control" id="address" onChange={(e)=>setAddress(e.target.value)} />
                            <label htmlFor="age">Age:-</label>
                            <input type="text" value={age} className="form-control" id="age" onChange={(e)=>setAge(e.target.value)} />
                             <label htmlFor="job">Job:-</label>
                             <select id="job" value={job} className="form-select" onChange={(e)=>setJob(e.target.value)}>
                                <option value="selected">select here</option>
                                <option value="devloper">devloper</option>
                                <option value="tester">tester</option>
                                <option value="support">support</option>
                             </select>
                             <button type="submit" className="btn btn-success me-3 mt-2">{selectuser ? "Update" : "Add"}</button>
                             <button type="button" onClick={canceledit} className="btn btn-warning text-white mt-2">cancel</button>
                        </form>
                    </div>
                   </div>
                </div>
        </div>
      </section>
    </>
  )
}

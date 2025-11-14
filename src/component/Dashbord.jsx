import React, { useState,useEffect } from "react";
import Userdata from "./Userdata";
import Userdetails from "./Userdetails";
let dummy = {name:"shreya",email:"bshreya483@gamil.com",age:21,address:"bihar",phno:1234567890,job:"devloper"}
 export default function Dashbord() {
    let[user,setUser] = useState([dummy]);
    let[selectuser,setSelectuser]=useState(null);
    let[showform,setShowform]=useState(false);
    useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUser(JSON.parse(storedUsers));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(user));
  }, [user]);
    function handleadduser(newuser){
        setUser([...user,{...newuser,id:Date.now()}])
        setShowform(false);

    }
    function hendledeleteuser(id){
        setUser(user.filter((u)=>u.id!==id))
   
    }
    function hendleupdate(update){
        setUser(user.map((u)=>u.id==update.id?update:u))
        setShowform(false);
    
    }
    function adduser(){
      setSelectuser(null);
      setShowform(true);  
    }
    function edituser(user){
        setSelectuser(user);
        setShowform(true);
    }
    function canceledit(){
       setSelectuser(null);
        setShowform(false); 
    }
  return (
    <>
     <section className="conratienr-fluid">
        <div className="row">
            <div className="col-12">
               <div className="row">
                 <div className="col-6">
                <Userdetails user={user} deleteuser={hendledeleteuser} edituser={edituser}/>
                {!showform && (
              <>
                <button className="btn btn-success me-2" onClick={adduser}>
                  Add
                </button>
              </>
            )}
                </div>
                <div className="col-6">
                    {showform &&(<Userdata adduser={handleadduser} update={hendleupdate} selectuser={selectuser} canceledit={canceledit} />
                    )}
                </div>
               </div>
            </div>
        </div>
      </section>
    </>
  )
}

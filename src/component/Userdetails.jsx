import React from "react";
//import "../style.css";

export default function Userdetails({ user, deleteuser, edituser }) {
    return (
        <>
            <section className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Age</th>
                                     <th>Phno</th>
                                    <th>Address</th>
                                    <th>job</th>
                                </thead>
                                <tbody>
                                    {
                                        user.map((u) => {
                                            let { id, name, email, phno, age, address, job } = u
                                            return (
                                                <tr key={id}>
                                                    <td>{name}</td>
                                                    <td>{email}</td>
                                                    <td>{age}</td>
                                                    <td>{phno}</td>
                                                    <td className="address">{address}</td>
                                                    <td>{job}</td>
                                                    <td><button className="btn btn-warning text-white" onClick={() => edituser(u)}>edit</button></td>
                                                    <td><button className="btn btn-danger" onClick={() => deleteuser(id)}>delete</button></td>
                                                </tr>)
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

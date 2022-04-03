import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";

const Record = (props) => (
  <tr>
    <td>{props.record.Emp_Firstname + " " + props.record.Emp_Lastname}</td>
    <td>{props.record.Emp_Role}</td>
    <td>{props.record.Emp_Mobileno}</td>
    {/* <td>{props.record.Emp_Role}</td>
    <td>{props.record.Emp_Date_of_joining}</td>
    <td>{props.record.Emp_Date_of_Brith}</td> */}
    {/* <td>{props.record.Emp_Password}</td> */}
    <td><Link className="btn btn-primary" to={`/viewmore/${props.record._id}`}>View More</Link></td>
    <td>
     <Link className="btn btn-success" to={`/updateuser/${props.record._id}`}>Edit</Link> |   
     <button className="btn btn-danger"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
      Delete
     </button>
   </td>
  </tr>
 );

export default function RecordList() {
  const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/record/`);
    // response = {'Emp_Firstname': 'abc'};
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
  
   return records.map((record) => {
    console.log(record);
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
  return (
    <div class="wrapper">
            {/* Sidebar Component */}
            <Sidebar/>

        <div class="main">
			<nav class="navbar navbar-expand navbar-light navbar-bg">
				<a class="sidebar-toggle js-sidebar-toggle">
                    <i class="hamburger align-self-center"></i>
                </a>
                {/* Header Component */}
                <Header/>
			</nav>

            {/* Dashboard Body Content */} 
                <main class="content">
				<div class="container-fluid p-0">

					<h1 class="h3 mb-3">Employee List</h1>

					<div class="row">
						<div class="col-12">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0"></h5>
								</div>
								<div class="card-body">
            <div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        {/* <th scope="col">ID</th> */}
        <th scope="col">Employee Name</th>
        <th scope="col">Employee Role</th>
        <th scope="col">Contact Number</th>
        <th scope="col">View More</th>
        <th scope="col">Update &nbsp;|&nbsp; Delete</th>
      </tr>
    </thead>
    <tbody>
      {recordList()}      
    </tbody>
  </table>
</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</main>

            {/* Footer Component */}
            <Footer/>
        </div>
    </div>
  );
}
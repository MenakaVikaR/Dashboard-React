import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidaber from "../Components/Sidebar";
import { Link } from "react-router-dom";
 
export default function Updateuser() {
 const [form, setForm] = useState({
  firstname: "",
  Emp_Lastname: "",
  Emp_Email: "",
  Emp_Mobileno:"",
  Emp_Id:"",
  Emp_Role:"",
  Emp_Date_of_joining:"",
  Emp_Date_of_Brith:"",
  Emp_Password:"",
  //Emp_Confirmpassword: "",
  records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
      firstname: form.Emp_Firstname,
      lastname: form.Emp_Lastname,
      emailid: form.Emp_Email,
      mobileno: form.Emp_Mobileno,
      empno: form.Emp_Id,
      emprole:form.Emp_Role,
      doj:form.Emp_Date_of_joining,
      dob:form.Emp_Date_of_Brith,
      password:form.Emp_Password,
      // confirmpassword:form.Emp_Confirmpassword,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
   window.location.href = "/userlist";
  //  navigate("/userlist");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
  <div class="wrapper">
  {/* Sidebar Component */}
  <Sidaber/>

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

					<h1 class="h3 mb-3">Update User Details</h1>

					<div class="row">
						<div class="col-12">
							<div class="card">
								{/* <div class="card-header">
									<h5 class="card-title mb-0">user details</h5>
								</div> */}
								<div class="card-body col-12 col-lg-7 custom-centered">
                <form onSubmit={onSubmit}>
							<div class="card-forms">
								<div class="card-body card-form">
                                    <label class="card-title mb-0">First Name<span style={{color: "#cc0000"}}>*</span></label>
									<input type="text" class="form-control" placeholder="Enter employee's first name" id="firstname" value={form.Emp_Firstname}
           onChange={(e) => updateForm({ Emp_Firstname: e.target.value })} required/>
                                    {/* <div className="errorMsg">{this.state.errors.firstname}</div> */}
								</div>
                                <div class="card-body card-form">
                                    <label class="card-title mb-0">Last Name<span style={{color: "#cc0000"}}>*</span></label>
									<input type="text" class="form-control" placeholder="Enter employee's last name" id="lastname" value={form.Emp_Lastname}
           onChange={(e) => updateForm({ Emp_Lastname: e.target.value })} required/>
                                    {/* <div className="errorMsg">{this.state.errors.lastname}</div> */}
                                </div>
                                <div class="card-body card-form">
                                    <label class="card-title mb-0">Email<span style={{color: "#cc0000"}}>*</span></label>
									<input type="email" class="form-control" placeholder="Enter employee's email id"  id="emailid" value={form.Emp_Email}
           onChange={(e) => updateForm({ Emp_Email: e.target.value })} required/>
                                    {/* <div className="errorMsg">{this.state.errors.emailid}</div> */}
                                </div>
                                <div class="card-body card-form">
                                    <label class="card-title mb-0">Mobile<span style={{color: "#cc0000"}}>*</span></label>
									<input type="number" class="form-control" placeholder="Enter employee's mobile number"  id="mobileno" value={form.Emp_Mobileno}
           onChange={(e) => updateForm({ Emp_Mobileno: e.target.value })} required/>
                                    {/* <div className="errorMsg">{this.state.errors.mobileno}</div> */}
                                </div>
                                <div class="card-body card-form">
                                    <label class="card-title mb-0">Emp Id (number)<span style={{color: "#cc0000"}}>*</span></label>
									<input type="number" class="form-control" placeholder="Enter employee's role no" id="empno" value={form.Emp_Id}
           onChange={(e) => updateForm({ Emp_Id: e.target.value })} required/>
                                    {/* <div className="errorMsg">{this.state.errors.empno}</div> */}
                                </div>
                                <div class="card-body card-form">
                                    <label class="card-title mb-0">Emp Role<span style={{color: "#cc0000"}}>*</span></label>
                                    <select class="form-select" aria-label="Default select example"  id="emprole" value={form.Emp_Role}
           onChange={(e) => updateForm({ Emp_Role: e.target.value })} required>
                                    <option selected>Open this select menu</option>
  <option value="Admin">Admin</option>
  <option value="Content Writer">Content Writer</option>
  <option value="Graphic Designer">Graphic Designer</option>
  <option value="UI Developer">UI Developer</option>
                                    </select>
									{/* <input type="text" class="form-control" placeholder="Enter employee's role" name="emprole" value={this.state.fields.emprole} onChange={this.handleChange}/> */}
                                    {/* <div className="errorMsg">{this.state.errors.emprole}</div> */}
                                </div>
                                <div class="card-body card-form">
                                    <label class="card-title mb-0">Date of Joining<span style={{color: "#cc0000"}}>*</span></label>
									<input type="date" class="form-control" placeholder="Enter employee's date of joining"  id="doj" value={form.Emp_Date_of_joining}
           onChange={(e) => updateForm({ Emp_Date_of_joining: e.target.value })} required/>
                                    {/* <div className="errorMsg">{this.state.errors.doj}</div> */}
                                </div>
                                <div class="card-body card-form">
                                    <label class="card-title mb-0">Date of Birth<span style={{color: "#cc0000"}}>*</span></label>
									<input type="date" class="form-control" placeholder="Enter employee's date of birth"  id="dob" value={form.Emp_Date_of_Brith}
           onChange={(e) => updateForm({ Emp_Date_of_Brith: e.target.value })} required/>
                                    {/* <div className="errorMsg">{this.state.errors.dob}</div> */}
                                </div>
                                
                                <div class="card-body card-form">
                                    <label class="card-title mb-0">Password<span style={{color: "#cc0000"}}>*</span></label>
									<input type="password" class="form-control" placeholder="Enter employee's password"  id="password" value={form.Emp_Password}
           onChange={(e) => updateForm({ Emp_Password: e.target.value })} required/>
                                    {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                </div>

                                {/* <div class="card-body card-form">
                                    <label class="card-title mb-0">Confrim Password<span style={{color: "#cc0000"}}>*</span></label>
									<input type="password" class="form-control" placeholder="Enter employee's confrim password"  id="confirmpassword" value={form.Emp_Confirmpassword}
           onChange={(e) => updateForm({ Emp_Confirmpassword: e.target.value })}/>
                                    <div className="errorMsg">{this.state.errors.confirmpassword}</div>
                                </div> */}

                                <div class="card-body card-btn">
                                {/* <input type="submit" className="button"  value="Register"/> */}
                                <button
                type="submit"
                className="btn btn-primary rowbtn"
                value="Register"
                // onMouseDown={() => this.setState({ submitCalled: true })}
              >
                Update Changes
              </button> 
              <Link to='/userlist' class="btn btn-dark" onClick='reload()'>No Changes</Link>
								</div>
							</div>
                            </form>
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

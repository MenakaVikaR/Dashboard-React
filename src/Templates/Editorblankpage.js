import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidaber from "../Components/Sidebar";

export default function Create() {
    const [form, setForm] = useState({
        name: "",
        content: "",
        basicconf: "",
     //    level: "",
      });
      const navigate = useNavigate();
      
      // These methods will update the state properties.
      function updateForm(value) {
        return setForm((prev) => {
          return { ...prev, ...value };
        });
      }
      
      // This function will handle the submission.
      async function onSubmit(e) {
        e.preventDefault();
      
        // When a post request is sent to the create url, we'll add a new record to the database.
        const newPerson = { ...form };
      
        await fetch("http://localhost:5000/record/editor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPerson),
        })
        .catch(error => {
          window.alert(error);
          return;
        });
      
        setForm({ name: "", editor: ""});
        navigate("/editorblankpage");
      }
      
      // This following section will display the form that takes the input from the user.
    return(
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

					<h1 class="h3 mb-3">Blank Page</h1>

					<div class="row">
						<div class="col-12">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Proposal Editor</h5>
								</div>
								<div class="card-body">
                                <div class="row">
                                    <div class="col-sm-12 col-md-12 col-lg-12"></div>

                                    <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">File Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div><br/>

       <div className="form-group">
         <label htmlFor="name">File Name</label>
         <input
           type="text"
           className="form-control"
           id="basicconf"
           value={form.basicconf}
           onChange={(e) => updateForm({ basicconf: e.target.value })}
         />
       </div><br/>
       
       {/* <div className="form-group">
         <label htmlFor="editor">File Name</label>
         <textarea
           type="text"
           className="form-control"
           id="basicconf"
           value={form.basicconf}
           onChange={(e) => updateForm({ basicconf: e.target.value })}
         >Welcome to React Template editor </textarea>
       </div>  */}
       <br/>

       {/* <textarea id="editor" type="text" onChange={(e) => updateForm({ editor: e.target.value })}>  </textarea> */}
       
       <div class="row rowbtn">
       {/* <div className="form-group">
         <input
           type="submit"
           value="File save"
           className="btn btn-primary"
         />
       </div> */}
                            <div class="col-sm-6">
                            <button
                type="submit"
                className="btn btn-primary"
                //onMouseDown={() => this.setState({ submitCalled: true })}
              >
                Save Template
              </button>
              <Link to="/templates" className="btn btn-dark" onClick="reload">Back</Link>
                            </div>
                        </div>
     </form>

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
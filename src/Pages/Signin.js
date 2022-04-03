import React from "react";
import { Link } from 'react-router-dom';

class SignIn extends React.Component {
	constructor() {
        super();
        this.state = {
          fields: {},
          errors: {}
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  
      };
  
      handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
      }
  
      submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            this.formSubmit();
            let fields = {};
            fields["emailid"] = "";
            fields["password"] = "";
            this.setState({fields:fields});
            // alert("Form submitted");
        }  
      }
      formSubmit(){
        let fields = this.state.fields;

        const recipeUrl = 'http://localhost:5000/record/check';
          const postBody = {
              "emailid": fields["emailid"],
              "password": fields["password"],
          };
          // console.log(postBody);
          const requestMetadata = {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(postBody)
          };
          fetch(recipeUrl, requestMetadata)
        .then(res => res.json())
        .then(recipes => {
          console.log(recipes);
          if(recipes!==null){
            window.location.href = "/dashboard";
          }
          else{
            window.alert("Invalid username and password");
          }
          this.setState({ recipes });
          //console.log();
        });
        console.log(requestMetadata);
       
        
        
        // let ab = JSON.stringify(result);
        // console.log(result);

        // async function getRecords() {
        //   const result = await fetch(`http://localhost:5000/record/check`);
        
        //   console.log(result.data);
        // }
        
        // async function getRecords() {
        //   const response = await fetch(`http://localhost:5000/check`);
        //   console.log(response);
        //   // alert(response.url);
        //   if (!response.ok) {
        //     const message = `An error occurred: ${response.statusText}`;
        //     window.alert(message);
        //     return;
        //   }
        //   else{
        //     window.alert('complie successfully');
        //   }
        //   const records = await response.json();
        //   // console.log(records);
        //   // setRecords(records);
        // }
      
        // getRecords();
        
        const requestListener = function (req, res) {
          res.writeHead(200);
          res.end("My first server!");
        };
      
      }
      

      validateForm() {
  
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
        if (!fields["emailid"]) {
          formIsValid = false;
          errors["emailid"] = "*Please enter your email-ID";
        }
  
        if (typeof fields["emailid"] !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fields["emailid"])) {
            formIsValid = false;
            errors["emailid"] = "*Please enter valid email-ID";
          }
        }
        
        if (!fields["password"]) {
          formIsValid = false;
          errors["password"] = "*Please enter your password";
        }

		// let user = "abc@gmail.com";
    // 	let pass = "aBcabcabc@1";
    //   if((user===fields["emailid"])&&(pass===fields["password"])){
    //     window.location.href = '/dashboard';
    //   }
    //   else{
    //     // alert('invalid Email and Password' + fields["emailid"] + fields["password"]);
		// errors["password"] = "*Please enter your correct password";
    //     // console.log(emailError);
    //     // console.log(passwordError);
    //     // console.log('invalid username and password');
    //   }
  
        this.setState({
          errors: errors
        });
        return formIsValid;
  
  
      }
	render(){
		return(
			<main class="d-flex w-100">
		<div class="container d-flex flex-column">
			<div class="row vh-100">
				<div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div class="d-table-cell align-middle">

						<div class="text-center mt-4">
							<h1 class="h2">Welcome Madarth</h1>
							<p class="lead">
								Sign in to your account to continue
							</p>
						</div>

						<div class="card">
							<div class="card-body">
								<div class="m-sm-4">
									<div class="text-center">
										<img src="assets/img/avatars/logo.png" alt="Charles Hall" class="img-fluid rounded-circle" width="132" height="132" />
									</div>
									<form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
										<div class="mb-3">
											<label class="form-label">Email</label>
											<input class="form-control form-control-lg" type="email" name="emailid" placeholder="Enter your email" value={this.state.fields.emailid} onChange={this.handleChange}/>
											<div className="errorMsg">{this.state.errors.emailid}</div>
										</div>
										<div class="mb-3">
											<label class="form-label">Password</label>
											<input class="form-control form-control-lg" type="password" name="password" placeholder="Enter your password"  value={this.state.fields.email} onChange={this.handleChange}/>
											<div className="errorMsg">{this.state.errors.password}</div>
										</div>
										{/* <div>
											<label class="form-check">
            <input class="form-check-input" type="checkbox" value="remember-me" name="remember-me" checked/>
            <span class="form-check-label">
              Remember me next time
            </span>
          </label>
										</div> */}
										<div class="row">
    <div class="col-sm-6 col-md-6 col-lg-6">
	<button
                type="submit"
                className="btn btn-primary rowbtn"
                // onMouseDown={() => this.setState({ submitCalled: true })}
              >
                Sign Up
              </button> 
      {/* <p>Lorem ipsum...</p> */}
    </div>
    {/* <div class="col-sm-6 col-md-6 col-lg-6 pass-align">
      <p><small><Link to="/">Forgot Password?</Link></small></p>
    </div> */}
  </div>
									</form>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</main>
		);
	}
}
  
export default SignIn;
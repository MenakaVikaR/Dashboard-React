import React from "react";
import { Link } from 'react-router-dom';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidaber from "../Components/Sidebar";

class Savedtemplates extends React.Component {
    render(){
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

					<h1 class="h3 mb-3">Edited Templates</h1>

					<div class="row">
						<div class="col-12">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Project Proposal</h5>
								</div>
								<div class="card-body">
            <div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Date</th>
        <th scope="col">Edited Proposal Templates</th>
        <th scope="col">Edit</th>
        <th scope="col">Send</th>
        <th scope="col">Download</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>01/01/2022</td>
        <td>Resume</td>
        <td><button type="submit" class="btn btn-info">Edit</button></td>
        <td><button type="submit" class="btn btn-primary">Send</button></td>
        <td><button type="submit" class="btn btn-success">Download</button></td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>01/01/2022</td>
        <td>Project proposal</td>
        <td><button type="submit" class="btn btn-info">Edit</button></td>
        <td><button type="submit" class="btn btn-primary">Send</button></td>
        <td><button type="submit" class="btn btn-success">Download</button></td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>01/01/2022</td>
        <td>Brochure</td>
        <td><button type="submit" class="btn btn-info">Edit</button></td>
        <td><button type="submit" class="btn btn-primary">Send</button></td>
        <td><button type="submit" class="btn btn-success">Download</button></td>
      </tr>
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
}
  
export default Savedtemplates;
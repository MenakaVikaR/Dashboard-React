import React from "react";
import { Link } from 'react-router-dom';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidaber from "../Components/Sidebar";

class Templates extends React.Component {
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

					<h1 class="h3 mb-3">Saved Templates</h1>

					<div class="row">
						<div class="col-12">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Project Proposal</h5>
								</div>
								<div class="card-body">
                                <div class="row">
                                        <div class="col-sm-6 col-md-6 col-lg-3">
                                        <Link to="/editorblankpage" onClick="reload"><img class="template" src='assets/img/photos/snapsix.png'/></Link>
                                        <p className='proposal-content'>Blank</p>
                                        </div>
                                        <div class="col-sm-6 col-md-6 col-lg-3">
                                        <Link to="/editorblankpage" onClick="reload"><img class="template" src='assets/img/photos/snapfive.png'/></Link>
                                        <p className='proposal-content'>Project proposal</p>
                                        </div>
                                        <div class="col-sm-6 col-md-6 col-lg-3">
                                        <Link to="/editorblankpage" onClick="reload"><img class="template" src='assets/img/photos/snapfour.png'/></Link>
                                        <p className='proposal-content'>Resume</p>
                                        </div>
                                        <div class="col-sm-6 col-md-6 col-lg-3">
                                        <Link to="/editorblankpage" onClick="reload"><img class="template" src='assets/img/photos/snapthree.png'/></Link>
                                        <p className='proposal-content'>Letter</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6 col-md-6 col-lg-3">
                                        <Link to="/editorblankpage" onClick="reload"><img class="template" src='assets/img/photos/snaptwo.png'/></Link>
                                        <p className='proposal-content'>Brochure</p>
                                        </div>
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
  
export default Templates;
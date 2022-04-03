import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Dashboard from './Dashboard';
import Sidebar from '../Components/Sidebar';
import SignIn from './Signin';
import Signup from './Signup';
import Registeruser from './Registeruser';
import Demo from './Demo';
import Templates from './Templates';
import Savedtemplates from './Savedtemplates';
import Userlist from './Userlist';
import Profile from './Profile';
import Updateuser from './Updateuser';
import Viewmore from './Viewmore';
import Editorblankpage from '../Templates/Editorblankpage';
import Editordemo from './Editordemo';
import Editorcontent from '../Templates/Editorcontent';
import Emailtemplates from '../Templates/Emailtemplates';
// import { Emailtemplates } from '../Templates/Emailtemplates';


export default function RouterPage() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/header" element={<Header />} />
                    <Route path="/footer" element={<Footer />} />
                    <Route path="/sidebar" element={<Sidebar />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/demo" element={<Demo />} />
                    <Route path="/registeruser" element={<Registeruser />} />
                    <Route path="/templates" element={<Templates />} />
                    <Route path="/savedtemplates" element={<Savedtemplates />} />
                    <Route path="/userlist" element={<Userlist />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/updateuser/:id" element={<Updateuser />} />
                    <Route path="/viewmore/:id" element={<Viewmore />} />
                    <Route path="/editorblankpage" element={<Editorblankpage />} />
                    <Route path="/editordemo" element={<Editordemo />} />
                    <Route path="/editorcontent" element={<Editorcontent />} />
                    <Route path="/emailtemplates" element={<Emailtemplates />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { Students } from './components/student/students';
import { CreateStudent } from './components/student/createStudent';
import { Courses } from './components/course/courses';
import { Staffs } from './components/staff/staffs';
import { ViewStudent } from './components/student/viewStudent';

function App() {


  return (
    <BrowserRouter>
      <Header   />
      <Sidebar  />
      <Routes>
        <Route path="students" element={<Students />} />
        <Route path="createStudent" element={<CreateStudent />} />
        <Route path="courses" element={<Courses />} />
        <Route path="staffs" element={<Staffs />} />
        <Route path="viewStudent/:id" element={<ViewStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

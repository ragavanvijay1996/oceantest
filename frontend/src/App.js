import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { CreateUser } from './settings/components/createUser';
import { Roles } from './settings/components/roles';
import { Teams } from './settings/components/teams';
import { Users } from './settings/components/users';
import { ViewUser } from './settings/components/viewUser';
import { Permissions } from './settings/components/permissions';
import { CompanyInformation } from './settings/components/companyInformation';
import { Settings } from './settings/settings';
import { Currencies } from './settings/components/currencies';
import { Taxes } from './settings/components/taxes';
import { ManageLedgers } from './settings/components/manageLedgers';
import { ManagePaymentMode } from './settings/components/managePaymentMode';
import { ManageExtraCharges } from './settings/components/manageExtraCharges';
import { TdsSection } from './settings/components/tdsSection';
import { LoginHistory } from './settings/components/loginHistory';
import { Groups } from './settings/components/groups';
import { CreateDepartment } from './settings/components/createDepartment';
import { CreateJobTitle } from './settings/components/createJobTitle';
import { ShiftPolicy } from './settings/components/shiftPolicy';
import { SalaryStructure } from './settings/components/salaryStructure';
import { ManageLeave } from './settings/components/manageLeave';
import { AddLocation } from './settings/components/addLocation';
import FormContainer from './FormContainer';
import { FormsList } from './formsList';
import { ViewForm } from './viewForm';
import { UsersList } from './users';
import { ViewFormData } from './viewFormData';
import { Login } from './login';
import { ViewProfile } from './components/profile';
import { Approval } from './settings/components/approval';
import { Dashboard } from './components/dashboard';
import { Students } from './components/student/students';
import { CreateStudent } from './components/student/createStudent';
import { Courses } from './components/course/courses';
import { Staffs } from './components/staff/staffs';
import { ViewStudent } from './components/student/viewStudent';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState([])
  const [departments, setDepartments] = useState([])
  const [permittedRole, setPermittedRole] = useState([])
  const [forms, setForms] = useState([])
  const [teams, setTeams] = useState([])

  useEffect(() => {
    const loadResponse = async () => {
      const response = await axios.get('/api/v1/me')
      setUser(response.data.user)
      if (response.data.user) {
        setLoggedIn(true)
      }
      const responseDepartments = await axios.get('/api/v1/departments')
      setDepartments(responseDepartments.data.departments)
      const responseRole = await axios.get('/api/v1/roles')
      const singleRole = responseRole.data.role.filter(rol => rol.roleName === response.data.user.role)
      if (singleRole[0]) {
        setPermittedRole(singleRole[0].permission)
      }
      const responseForms = await axios.get('/api/v1/forms')
      setForms(responseForms.data.forms)
      const responseTeam = await axios.get('/api/v1/teams')
      setTeams(responseTeam.data.team)
    }

    loadResponse()
  }, [])

 






  return (
    <BrowserRouter>
      <Header  user={user} />
      <Sidebar departments={departments} permittedRole={permittedRole} />
      <Routes>
        {
          user.role === 'admin' && <Route path="/settings" element={<Settings />} />
        }

        <Route path="roles" element={<Roles />} />
        {
          user.role === 'admin' && <Route path="/" element={<Dashboard departments={departments}  forms={forms} teams={teams} />} />
        }

        <Route path="teams" element={<Teams />} />
        <Route path="users" element={<Users />} />
        <Route path="viewUser/:id" element={<ViewUser />} />
        <Route path="createUser" element={<CreateUser />} />
        <Route path="permissions" element={<Permissions />} />
        <Route path="companyInformation" element={<CompanyInformation />} />
        <Route path="currencies" element={<Currencies />} />
        <Route path="taxes" element={<Taxes />} />
        <Route path="manageLedgers" element={<ManageLedgers />} />
        <Route path="managePaymentMode" element={<ManagePaymentMode />} />
        <Route path="manageExtraCharges" element={<ManageExtraCharges />} />
        <Route path="tdsSection" element={<TdsSection />} />
        <Route path="loginHistory" element={<LoginHistory />} />
        <Route path="groups" element={<Groups />} />
        <Route path="createDepartment" element={<CreateDepartment />} />
        <Route path="createJobTitle" element={<CreateJobTitle />} />
        <Route path="shiftPolicy" element={<ShiftPolicy />} />
        <Route path="salaryStructure" element={<SalaryStructure />} />
        <Route path="manageLeave" element={<ManageLeave />} />
        <Route path="addLocation" element={<AddLocation />} />
        <Route path="createForm" element={<FormContainer />} />
        <Route path="formsList" element={<FormsList />} />
        <Route path="viewForm/:id" element={<ViewForm />} />
        <Route path="viewData" element={<UsersList />} />
        <Route path="viewFormData/:id" element={<ViewFormData />} />
        <Route path="profile" element={< ViewProfile user={user} />} />
        <Route path="approval" element={<Approval />} />
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

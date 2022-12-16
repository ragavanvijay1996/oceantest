import React from "react";

export const Settings = () => {
    return(
        <div className="main-container">
            <div className="list-container d-flex gap-5 ">
                    <div className="settings-list">
                        <h6>User Management</h6>
                        <ul>
                            <li>
                                <a href="/users">Users</a>
                            </li>
                        <li>
                            <a href="/roles">Roles</a>
                        </li>
                        <li>
                            <a href="/teams">Teams</a>
                        </li>
                        <li>
                            <a href="/approval">Approval</a>
                        </li>
                        <li>
                            <a href="/permissions">Permissions</a>
                        </li>
                        <li>
                            <a href="/groups">Groups</a>
                        </li>
                        <li>
                            <a href="/loginHistory">Login History</a>
                        </li>
                       
                        </ul>
                    </div>
                <div className="settings-list">
                    <h6>Taxes</h6>
                    <ul>
                        <li>
                            <a href="/taxes">Tax Management</a>
                        </li>
                        <li>
                            <a href="/">Terms and Conditions</a>
                        </li>
                    </ul>
                </div>
                <div className="settings-list">
                    <h6>Configuration</h6>
                    <ul>
                        <li>
                            <a href="/companyInformation">Company Details</a>
                        </li>
                        <li>
                            <a href="/addLocation">Add Locations</a>
                        </li>
                        <li>
                            <a href="/currencies">Currencies</a>
                        </li>
                        <li>
                            <a href="/">Bussiness Hours</a>
                        </li>
                        <li>
                            <a href="/">Email Settings</a>
                        </li>
                        <li>
                            <a href="/">Usage Details</a>
                        </li>
                    </ul>
                </div>
                <div className="settings-list">
                    <h6>Accounts</h6>
                    <ul>
                        <li>
                            <a href="/manageLedgers">Manage Ledgers</a>
                        </li>
                        <li>
                            <a href="/currencies">Manage Groups</a>
                        </li>
                        <li>
                            <a href="/managePaymentMode">Manage Payment Mode</a>
                        </li>
                        <li>
                            <a href="/manageExtraCharges">Manage Extra Charges</a>
                        </li>
                        <li>
                            <a href="/tdsSection">TDS Section</a>
                        </li>
                    </ul>
                </div>
                <div className="settings-list">
                    <h6>HR</h6>
                    <ul>
                        <li>
                            <a href="/createDepartment">Create Deparment</a>
                        </li>
                        <li>
                            <a href="/createJobTitle">Create Job Title</a>
                        </li>
                        <li>
                            <a href="/shiftPolicy">Shift Policy</a>
                        </li>
                        <li>
                            <a href="/salaryStructure">Salary Structure</a>
                        </li>
                        <li>
                            <a href="/manageLeave">Manage Leave</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
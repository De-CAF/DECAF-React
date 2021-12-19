import React from "react";
// reactstrap components
import { Container } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../features/userSlice";

export default function AccountSettings() {

    const userName = useSelector(selectUserName)
    
    return (
        <div>
            <div className="account-settings">
                <div className="section">
                    <Container>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="section">
                                    {/* User Information */}
                                    <section className="text-center">
                                        <div className="fileinput fileinput-new text-center" data-provides="fileinput">
                                            <div className="fileinput-new thumbnail img-circle img-raised">
                                                <img src="/img/placeholder.jpg" alt="..." />
                                            </div>
                                            <div className="fileinput-preview fileinput-exists thumbnail img-circle img-raised" />
                                            <div>
                                                <span className="btn btn-raised btn-round btn-default btn-file">
                                                    <span className="fileinput-new">Add Photo</span>
                                                    <span className="fileinput-exists">Change</span>
                                                    <input type="file" name="..." />
                                                </span>
                                                <br />
                                                <a href="#pablo" className="btn btn-danger btn-round fileinput-exists btn-simple" data-dismiss="fileinput"><i className="tim-icons icon-simple-remove" /> Remove</a>
                                            </div>
                                        </div>
                                        <h3 className="title">{userName}</h3>
                                    </section>
                                    {/* User Information */}
                                    {/* Profile Sidebar */}
                                    <section>
                                        <br />
                                        <ul className="nav flex-column" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-toggle="tab" href="#link1" role="tablist">
                                                    <i className="tim-icons icon-single-02" /> General
                                                </a>
                                            </li>
                                            <hr className="line-primary" />
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#link2" role="tablist">
                                                    <i className="tim-icons icon-credit-card" /> Billing
                                                </a>
                                            </li>
                                            <hr className="line-primary" />
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#link3" role="tablist">
                                                    <i className="tim-icons icon-lock-circle" /> Security
                                                </a>
                                            </li>
                                            <hr className="line-primary" />
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#link4" role="tablist">
                                                    <i className="tim-icons icon-volume-98" /> Notifications
                                                </a>
                                            </li>
                                        </ul>
                                    </section>
                                    {/* End Profile Sidebar */}
                                    {/* Profile Completion */}
                                    <br />
                                    <br />
                                    <br />
                                    <section>
                                        <div className="progress-container progress-primary">
                                            <span className="progress-badge">Profile Completion</span>
                                            <div className="progress">
                                                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '60%' }}>
                                                    <span className="progress-value">60%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    {/* End Profile Completion */}
                                </div>
                            </div>
                            <div className="col-md-8 ml-auto">
                                <div className="section">
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="link1">
                                            <div>
                                                <header>
                                                    <h2 className="text-uppercase">General information</h2>
                                                </header>
                                                <hr className="line-primary" />
                                                <br />
                                                <div className="row">
                                                    <div className="col-md-3 align-self-center">
                                                        <label className="labels" htmlFor="#firstName">First Name</label>
                                                    </div>
                                                    <div className="col-md-9 align-self-center">
                                                        <div className="form-group">
                                                            <input id="firstName" name="firstName" className="form-control" type="text" defaultValue="Charlie" required="required" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-3 align-self-center">
                                                        <label className="labels" htmlFor="#lastName">Last Name</label>
                                                    </div>
                                                    <div className="col-md-9 align-self-center">
                                                        <div className="form-group">
                                                            <input id="lastName" name="lastName" className="form-control" type="text" defaultValue="Bailey" required="required" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-3 align-self-center">
                                                        <label className="labels">I’m</label>
                                                    </div>
                                                    <div className="col-md-4 align-self-center">
                                                        <div className="form-group">
                                                            <div className="dropdown bootstrap-select"><select className="selectpicker" data-size={7} data-style="btn btn-primary" title="Single Select" tabIndex={-98}>
                                                                <option className="bs-title-option" value />
                                                                <option disabled selected>Gender</option>
                                                                <option value={2}>Male</option>
                                                                <option value={3}>Female</option>
                                                            </select><button type="button" className="dropdown-toggle btn btn-primary" data-toggle="dropdown" role="button" title="Gender">
                                                                    <div className="filter-option">
                                                                        <div className="filter-option-inner">
                                                                            <div className="filter-option-inner-inner">Gender</div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                                <div className="dropdown-menu " role="combobox">
                                                                    <div className="inner show" role="listbox" aria-expanded="false" tabIndex={-1}>
                                                                        <ul className="dropdown-menu inner show" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-3 align-self-center">
                                                        <label className="labels">Birth Date</label>
                                                    </div>
                                                    <div className="col-md-9 align-self-center">
                                                        <div className="row">
                                                            <div className="col-md-4 align-self-center">
                                                                <div className="form-group">
                                                                    <div className="dropdown bootstrap-select"><select className="selectpicker" data-size={7} data-style="btn btn-primary" title="Single Select" tabIndex={-98}>
                                                                        <option className="bs-title-option" value />
                                                                        <option>January</option>
                                                                        <option>February</option>
                                                                        <option>March</option>
                                                                        <option selected="selected">April</option>
                                                                        <option>May</option>
                                                                        <option>June</option>
                                                                        <option>July</option>
                                                                        <option>August</option>
                                                                        <option>September</option>
                                                                        <option>October</option>
                                                                        <option>November</option>
                                                                        <option>December</option>
                                                                    </select><button type="button" className="dropdown-toggle btn btn-primary" data-toggle="dropdown" role="button" title="April">
                                                                            <div className="filter-option">
                                                                                <div className="filter-option-inner">
                                                                                    <div className="filter-option-inner-inner">April
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </button>
                                                                        <div className="dropdown-menu " role="combobox">
                                                                            <div className="inner show" role="listbox" aria-expanded="false" tabIndex={-1}>
                                                                                <ul className="dropdown-menu inner show" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <div className="dropdown bootstrap-select"><select className="selectpicker" data-size={7} data-style="btn btn-primary" title="Single Select" tabIndex={-98}>
                                                                        <option className="bs-title-option" value />
                                                                        <option>1</option>
                                                                        <option>2</option>
                                                                        <option>3</option>
                                                                        <option>4</option>
                                                                        <option>5</option>
                                                                        <option>6</option>
                                                                        <option>7</option>
                                                                        <option>8</option>
                                                                        <option>9</option>
                                                                        <option>10</option>
                                                                        <option selected="selected">11</option>
                                                                        <option>12</option>
                                                                        <option>13</option>
                                                                        <option>14</option>
                                                                        <option>15</option>
                                                                        <option>16</option>
                                                                        <option>17</option>
                                                                        <option>18</option>
                                                                        <option>19</option>
                                                                        <option>20</option>
                                                                        <option>21</option>
                                                                        <option>22</option>
                                                                        <option>23</option>
                                                                        <option>24</option>
                                                                        <option>25</option>
                                                                        <option>26</option>
                                                                        <option>27</option>
                                                                        <option>28</option>
                                                                        <option>29</option>
                                                                        <option>30</option>
                                                                        <option>31</option>
                                                                    </select><button type="button" className="dropdown-toggle btn btn-primary" data-toggle="dropdown" role="button" title={11}>
                                                                            <div className="filter-option">
                                                                                <div className="filter-option-inner">
                                                                                    <div className="filter-option-inner-inner">11</div>
                                                                                </div>
                                                                            </div>
                                                                        </button>
                                                                        <div className="dropdown-menu " role="combobox">
                                                                            <div className="inner show" role="listbox" aria-expanded="false" tabIndex={-1}>
                                                                                <ul className="dropdown-menu inner show" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <div className="dropdown bootstrap-select"><select className="selectpicker" data-size={7} data-style="btn btn-primary" title="Single Select" tabIndex={-98}>
                                                                        <option className="bs-title-option" value />
                                                                        <option>1986</option>
                                                                        <option>1987</option>
                                                                        <option>1988</option>
                                                                        <option selected="selected">1989</option>
                                                                        <option>1990</option>
                                                                        <option>1991</option>
                                                                        <option>1992</option>
                                                                        <option>1993</option>
                                                                        <option>1994</option>
                                                                        <option>1995</option>
                                                                        <option>1996</option>
                                                                        <option>1997</option>
                                                                        <option>1998</option>
                                                                        <option>1999</option>
                                                                        <option>2000</option>
                                                                        <option>2001</option>
                                                                        <option>2002</option>
                                                                        <option>2003</option>
                                                                        <option>2004</option>
                                                                        <option>2005</option>
                                                                        <option>2006</option>
                                                                        <option>2007</option>
                                                                        <option>2008</option>
                                                                        <option>2009</option>
                                                                        <option>2010</option>
                                                                        <option>2011</option>
                                                                        <option>2012</option>
                                                                        <option>2013</option>
                                                                        <option>2014</option>
                                                                        <option>2015</option>
                                                                        <option>2016</option>
                                                                        <option>2017</option>
                                                                        <option>2018</option>
                                                                        <option>2019</option>
                                                                    </select><button type="button" className="dropdown-toggle btn btn-primary" data-toggle="dropdown" role="button" title={1989}>
                                                                            <div className="filter-option">
                                                                                <div className="filter-option-inner">
                                                                                    <div className="filter-option-inner-inner">1989
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </button>
                                                                        <div className="dropdown-menu " role="combobox">
                                                                            <div className="inner show" role="listbox" aria-expanded="false" tabIndex={-1}>
                                                                                <ul className="dropdown-menu inner show" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-3 align-self-center">
                                                        <label className="labels" htmlFor="#email">Email</label>
                                                    </div>
                                                    <div className="col-md-9 align-self-center">
                                                        <div className="form-group">
                                                            <input id="email" name="email" className="form-control" type="email" defaultValue="charlie.bailey@example.com" required="required" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-3 align-self-center">
                                                        <label className="labels" htmlFor="#confirmEmail">Confirm Email</label>
                                                    </div>
                                                    <div className="col-md-9 align-self-center">
                                                        <div className="form-group">
                                                            <input id="confirmEmail" name="confirmEmail" className="form-control" type="email" defaultValue="charlie.bailey@example.com" required="required" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-3 align-self-center">
                                                        <label className="labels" htmlFor="#location">Your Location</label>
                                                    </div>
                                                    <div className="col-md-9 align-self-center">
                                                        <div className="form-group">
                                                            <input id="location" name="location" className="form-control" type="text" defaultValue="Sydney, A" required="required" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-3 align-self-center">
                                                        <label className="labels" htmlFor="#phone">Phone Number</label>
                                                    </div>
                                                    <div className="col-md-4 align-self-center">
                                                        <div className="form-group">
                                                            <input id="phone" name="phone" className="form-control" type="tel" defaultValue="+40 745 031 200" required="required" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-3 align-self-center">
                                                        <label className="labels">Language</label>
                                                    </div>
                                                    <div className="col-md-4 align-self-center">
                                                        <div className="form-group">
                                                            <div className="dropdown bootstrap-select"><select className="selectpicker" data-size={7} data-style="btn btn-primary" title="Single Select" tabIndex={-98}>
                                                                <option className="bs-title-option" value />
                                                                <option selected>English</option>
                                                                <option value={2}>French</option>
                                                                <option value={3}>Spanish</option>
                                                                <option value={4}>Deutsche</option>
                                                                <option value={4}>Russian</option>
                                                            </select><button type="button" className="dropdown-toggle btn btn-primary" data-toggle="dropdown" role="button" title="English">
                                                                    <div className="filter-option">
                                                                        <div className="filter-option-inner">
                                                                            <div className="filter-option-inner-inner">English</div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                                <div className="dropdown-menu " role="combobox">
                                                                    <div className="inner show" role="listbox" aria-expanded="false" tabIndex={-1}>
                                                                        <ul className="dropdown-menu inner show" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mt-4">
                                                    <div className="col-md-6">
                                                        <button className="btn btn-primary" type="submit">Save Changes</button>
                                                        <button className="btn btn-primary btn-simple" type="reset">Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="link2">
                                            <header>
                                                <h2 className="text-uppercase">Billing method</h2>
                                            </header>
                                            <hr className="line-primary" />
                                            <br />
                                            <table className="table align-items-center">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Card Type</th>
                                                        <th scope="col">Card Number</th>
                                                        <th scope="col">Payment Method</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            <img alt="Image" src="/img/visas.png" className="avatar" />
                                                        </th>
                                                        <td>
                                                            <span className="d-block">•••• •••• •••• 8372</span>
                                                            <small className="text-muted">Exp: 06/22</small>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="form-check form-check-radio">
                                                                <label className="form-check-label">
                                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="Radios" defaultValue="option2" defaultChecked />
                                                                    <span className="form-check-sign" />
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <button type="submit" className="btn btn-danger btn-sm btn-simple">
                                                                <i className="tim-icons icon-simple-remove" /> Remove card
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <img alt="Image" src="/img/mastercard.png" className="avatar" />
                                                        </th>
                                                        <td>
                                                            <span className="d-block">•••• •••• •••• 1225</span>
                                                            <small className="text-muted">Exp: 07/21</small>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="form-check form-check-radio">
                                                                <label className="form-check-label">
                                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="Radios" defaultValue="option1" />
                                                                    <span className="form-check-sign" />
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <button type="submit" className="btn btn-danger btn-sm btn-simple">
                                                                <i className="tim-icons icon-simple-remove" /> Remove card
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <button className="btn btn-primary btn-sm">
                                                <i className="tim-icons icon-simple-add" /> Add card
                                            </button>
                                        </div>
                                        <div className="tab-pane" id="link3">
                                            <div className="g-pos-rel h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-30--md">
                                                <header>
                                                    <h2 className="text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0">
                                                        Security Questions</h2>
                                                </header>
                                                <hr className="line-primary" />
                                                <form>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Security Question</label>
                                                            <div className="form-group">
                                                                <div className="dropdown bootstrap-select"><select className="selectpicker" data-size={7} data-style="btn btn-primary" title="Single Select" tabIndex={-98}>
                                                                    <option className="bs-title-option" value />
                                                                    <option disabled selected>Your Question</option>
                                                                    <option value={2}>Question 1</option>
                                                                    <option value={3}>Question 2</option>
                                                                    <option value={4}>Question 3</option>
                                                                </select><button type="button" className="dropdown-toggle btn btn-primary" data-toggle="dropdown" role="button" title="Your Question">
                                                                        <div className="filter-option">
                                                                            <div className="filter-option-inner">
                                                                                <div className="filter-option-inner-inner">Your Question
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </button>
                                                                    <div className="dropdown-menu " role="combobox">
                                                                        <div className="inner show" role="listbox" aria-expanded="false" tabIndex={-1}>
                                                                            <ul className="dropdown-menu inner show" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label>Your Answer</label>
                                                            <div className="form-group">
                                                                <input className="form-control" type="text" placeholder="Enter your answer" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br />
                                                    <br />
                                                    <header>
                                                        <h2 className="text-uppercase">Security Settings</h2>
                                                    </header>
                                                    <hr className="line-primary" />
                                                    <div className="form-group d-flex align-items-center justify-content-between">
                                                        <span>Notify me via email when logging in</span>
                                                        <div className="bootstrap-switch-on bootstrap-switch bootstrap-switch-wrapper">
                                                            <div className="bootstrap-switch-container"><span className="bootstrap-switch-handle-on bootstrap-switch-primary">ON</span><span className="bootstrap-switch-label">&nbsp;</span><span className="bootstrap-switch-handle-off bootstrap-switch-default">OFF</span><input type="checkbox" name="checkbox" className="bootstrap-switch" defaultChecked data-on-label="ON" data-off-label="OFF" /></div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group d-flex align-items-center justify-content-between">
                                                        <span>Send SMS confirmation for all online payments</span>
                                                        <div className="bootstrap-switch-on bootstrap-switch bootstrap-switch-wrapper">
                                                            <div className="bootstrap-switch-container"><span className="bootstrap-switch-handle-on bootstrap-switch-primary">ON</span><span className="bootstrap-switch-label">&nbsp;</span><span className="bootstrap-switch-handle-off bootstrap-switch-default">OFF</span><input type="checkbox" name="checkbox" className="bootstrap-switch" defaultChecked data-on-label="ON" data-off-label="OFF" /></div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group d-flex align-items-center justify-content-between">
                                                        <span>Check which devices accessed your account</span>
                                                        <div className="bootstrap-switch-off bootstrap-switch bootstrap-switch-wrapper">
                                                            <div className="bootstrap-switch-container"><span className="bootstrap-switch-handle-on bootstrap-switch-primary">ON</span><span className="bootstrap-switch-label">&nbsp;</span><span className="bootstrap-switch-handle-off bootstrap-switch-default">OFF</span><input type="checkbox" name="checkbox" className="bootstrap-switch" data-on-label="ON" data-off-label="OFF" /></div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group d-flex align-items-center justify-content-between">
                                                        <span>Find My Device, make sure your device can be found if it gets
                                                            lost</span>
                                                        <div className="bootstrap-switch-on bootstrap-switch bootstrap-switch-wrapper">
                                                            <div className="bootstrap-switch-container"><span className="bootstrap-switch-handle-on bootstrap-switch-primary">ON</span><span className="bootstrap-switch-label">&nbsp;</span><span className="bootstrap-switch-handle-off bootstrap-switch-default">OFF</span><input type="checkbox" name="checkbox" className="bootstrap-switch" defaultChecked data-on-label="ON" data-off-label="OFF" /></div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group d-flex align-items-center justify-content-between">
                                                        <span>Lock your device with a PIN, pattern, or password</span>
                                                        <div className="bootstrap-switch-on bootstrap-switch bootstrap-switch-wrapper">
                                                            <div className="bootstrap-switch-container"><span className="bootstrap-switch-handle-on bootstrap-switch-primary">ON</span><span className="bootstrap-switch-label">&nbsp;</span><span className="bootstrap-switch-handle-off bootstrap-switch-default">OFF</span><input type="checkbox" name="checkbox" className="bootstrap-switch" defaultChecked data-on-label="ON" data-off-label="OFF" /></div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group d-flex align-items-center justify-content-between">
                                                        <span>Manage what apps have access to app-usage data on your device</span>
                                                        <div className="bootstrap-switch-off bootstrap-switch bootstrap-switch-wrapper">
                                                            <div className="bootstrap-switch-container"><span className="bootstrap-switch-handle-on bootstrap-switch-primary">ON</span><span className="bootstrap-switch-label">&nbsp;</span><span className="bootstrap-switch-handle-off bootstrap-switch-default">OFF</span><input type="checkbox" name="checkbox" className="bootstrap-switch" data-on-label="ON" data-off-label="OFF" /></div>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-5 justify-content-end">
                                                        <div className="col-md-4 ml-auto">
                                                            <button className="btn btn-primary btn-sm btn-simple" type="reset">Cancel</button>
                                                            <button className="btn btn-primary btn-sm" type="button">Save
                                                                Changes</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="link4">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="alert alert-primary text-small" role="alert">
                                                            <i className="icon-shield" />
                                                            <span>
                                                                We will never distribute your email address to third parties. Read
                                                                about email communication in our privacy policy.
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {/*end of col*/}
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-12">
                                                        <form>
                                                            <h5 className="mb-4">Notification Preferences</h5>
                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <input className="form-check-input" type="checkbox" defaultChecked />
                                                                    <span className="form-check-sign" />
                                                                    Someone mentions me
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <input className="form-check-input" type="checkbox" defaultChecked />
                                                                    <span className="form-check-sign" />
                                                                    Someone follows me
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <input className="form-check-input" type="checkbox" />
                                                                    <span className="form-check-sign" />
                                                                    Someone shares my activty
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <input className="form-check-input" type="checkbox" />
                                                                    <span className="form-check-sign" />
                                                                    Someone messages me
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <input className="form-check-input" type="checkbox" />
                                                                    <span className="form-check-sign" />
                                                                    Someone adds me to a project
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <input className="form-check-input" type="checkbox" />
                                                                    <span className="form-check-sign" />
                                                                    Sales and promotions
                                                                </label>
                                                            </div>
                                                            <button type="submit" className="btn btn-primary btn-sm mt-4">Update
                                                                preferences</button>
                                                        </form>
                                                    </div>
                                                    {/*end of col*/}
                                                </div>
                                                {/*end of row*/}
                                                <hr />
                                                <div className="row">
                                                    <div className="col-12">
                                                        <form>
                                                            <h5>Notification Frequency</h5>
                                                            <div className="form-check form-check-radio">
                                                                <label className="form-check-label">
                                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleF" defaultValue="option1" />
                                                                    <span className="form-check-sign" />
                                                                    Daily
                                                                </label>
                                                            </div>
                                                            <div className="form-check form-check-radio">
                                                                <label className="form-check-label">
                                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleF" defaultValue="option2" defaultChecked />
                                                                    <span className="form-check-sign" />
                                                                    Weekly
                                                                </label>
                                                            </div>
                                                            <div className="form-check form-check-radio">
                                                                <label className="form-check-label">
                                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleF" defaultValue="option3" />
                                                                    <span className="form-check-sign" />
                                                                    Monthly
                                                                </label>
                                                            </div>
                                                            <div className="form-check form-check-radio">
                                                                <label className="form-check-label">
                                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleF" defaultValue="option4" />
                                                                    <span className="form-check-sign" />
                                                                    Never
                                                                </label>
                                                            </div>
                                                            <button type="submit" className="btn btn-primary btn-sm mt-4">Update</button>
                                                        </form>
                                                    </div>
                                                    {/*end of col*/}
                                                </div>
                                                {/*end of row*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>&gt;
        </div>
    );
}

import React, { useState, useEffect } from "react";
// reactstrap components
import { Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Alert } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { selectProfilePicLink, selectUserName, setProfilePicLink, selectUserEmail, setAdditionalInformation, selectGender, selectBirthDate, selectLocation, selectPhone, selectUserBio } from "../../features/userSlice";
import { auth, storage, firestore } from "../../firebase"

export default function AccountSettings() {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName)
    // const  = useSelector(selectLastName)
    const gender = useSelector(selectGender)
    const birthDate = useSelector(selectBirthDate)
    const location = useSelector(selectLocation)
    const phone = useSelector(selectPhone)
    const email = useSelector(selectUserEmail)
    const userBio = useSelector(selectUserBio)
    const profilePicLink = useSelector(selectProfilePicLink)

    const counterFunc = () => {
        let count = 0;
            if(userName) count++;
            if(gender) count++;
            if(userBio) count++;
            if(birthDate) count++;
            if(email) count++;
            if(location) count++;
            if(phone) count++;
            return count;
    }

    const [imageAsFile, setImageAsFile] = useState('')

    const [profileCompletion, setProfileCompletion] = useState(0)
    const [counter, setCounter] = useState(counterFunc())
    const [submitting,setSubmitting] = useState(false)
    const [genderDropdown, setGenderDropdown] = useState(false)
    const [showAlert, setShowAlert] = useState(false);




    useEffect(() => {
            
            let count = counterFunc();
            setCounter(count)
            setProfileCompletion((counter / 7) * 100)
            console.log('After state change',counter)
    },[submitting])

    const handleImageAsFile = (e) => {
        console.log(e)
        setImageAsFile(e.target.files[0])
    }

    const handleFireBaseUpload = e => {
        e.preventDefault()
        console.log('start of upload')
        if (imageAsFile === '') {
            console.error(`not an image, the image file is a ${typeof (imageAsFile)}`)
        }
        const uploadTask = storage.ref(`/images/${auth.currentUser.uid}`).put(imageAsFile)
        uploadTask.on('state_changed',
            (snapShot) => {
                console.log(snapShot)
            }, (err) => {
                console.log(err)
            }, () => {
                storage.ref('images').child(auth.currentUser.uid).getDownloadURL()
                    .then(fireBaseUrl => {
                        auth.currentUser.updateProfile({
                            photoURL: fireBaseUrl
                        }).then(() => {
                            dispatch(setProfilePicLink({
                                profilePicLink: fireBaseUrl
                            }))
                        })
                    })
            })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true)
        setShowAlert(false)
        console.log(auth.currentUser.uid)
        
        firestore.collection('users').doc(auth.currentUser.uid).set({
            userName, gender, birthDate, location, phone, profileCompletion, userBio
        }).then(() => {
            console.log('Profile has been updated')
            setShowAlert(true)
            setSubmitting(false)
            dispatch(setAdditionalInformation({userBio: userBio, profileCompletion: profileCompletion, gender: gender, birthDate: birthDate, location: location, phone: phone}))
        })
            .catch(err => console.log(err))
    }

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
                                        <div className="text-center">

                                            {
                                                profilePicLink ? (<><div className="fileinput-new thumbnail img-circle img-raised">
                                                    <img src={profilePicLink} className="img-center img-fluid rounded-circle" alt="..." />
                                                </div><input type="file" onChange={handleImageAsFile} /><button onClick={handleFireBaseUpload} className="btn btn-default btn-round btn-lg btn-block">Edit</button></>) :
                                                    (<><div className="fileinput-new thumbnail img-circle img-raised">
                                                        <img src="/img/placeholder.jpg" alt="..." />
                                                    </div><br />

                                                        <input type="file" onChange={handleImageAsFile} />
                                                        <button onClick={handleFireBaseUpload} className="btn btn-warning btn-round btn-lg btn-block">Upload</button></>)
                                            }
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
                                            {/*
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
                                            */}
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
                                                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={profileCompletion} aria-valuemin={0} aria-valuemax={100} style={{ width: '{ profileCompletion }' }}>
                                                    <span className="progress-value">{profileCompletion}</span>
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
                                                        <label className="labels" htmlFor="#firstName">User Name</label>
                                                    </div>
                                                    <div className="col-md-9 align-self-center">
                                                        <div className="form-group">
                                                            <input disabled id="firstName" name="firstName" className="form-control" type="text" value={userName} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-3 align-self-center">
                                                        <label className="labels" htmlFor="#lastName">Bio</label>
                                                    </div>
                                                    <div className="col-md-9 align-self-center">
                                                        <div className="form-group">
                                                            <input id="userBio" name="userBio" className="form-control" type="text" defaultValue="" value={userBio} onChange={e => dispatch(setAdditionalInformation({ userBio: e.target.value, profileCompletion: profileCompletion, gender: gender, birthDate: birthDate, location: location, phone: phone }))} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-3 align-self-center">
                                                        <label className="labels">I'm</label>
                                                    </div>
                                                    <div className="col-md-9 align-self-center">
                                                        <Dropdown toggle={() => {
                                                            setGenderDropdown(!genderDropdown)
                                                        }} isOpen={genderDropdown}   >
                                                            <DropdownToggle caret >
                                                                {gender ? gender : "Gender"}
                                                            </DropdownToggle>
                                                            <DropdownMenu  >
                                                                <DropdownItem onClick={() => {
                                                                    dispatch(setAdditionalInformation({ gender: "Male", birthDate: birthDate, location: location, phone: phone, userBio: userBio, profileCompletion: profileCompletion }))
                                                                }}   >
                                                                    Male
                                                                </DropdownItem>
                                                                <DropdownItem onClick={() => {
                                                                    dispatch(setAdditionalInformation({ gender: "Female", birthDate: birthDate, location: location, phone: phone, userBio: userBio, profileCompletion: profileCompletion }))
                                                                }}>
                                                                    Female
                                                                </DropdownItem>
                                                            </DropdownMenu>

                                                        </Dropdown>
                                                    </div>


                                                </div>
                                                <div className="row">
                                                    <div className="col-md-3 align-self-center">
                                                        <label className="labels">Birth Date</label>
                                                    </div>
                                                    <div className="col-md-9 align-self-center">
                                                        <Input
                                                            id="exampleDate"
                                                            name="date"
                                                            placeholder="date placeholder"
                                                            type="date"
                                                            value={birthDate}
                                                            onChange={e => dispatch(setAdditionalInformation({ birthDate: e.target.value, gender: gender, location: location, phone: phone, userBio: userBio, profileCompletion: profileCompletion }))}
                                                        />
                                                    </div>

                                                </div>

                                                <div className="row">
                                                    <div className="col-md-3 align-self-center">
                                                        <label className="labels" htmlFor="#email">Email</label>
                                                    </div>
                                                    <div className="col-md-9 align-self-center">
                                                        <div className="form-group">
                                                            <input disabled id="email" name="email" className="form-control" type="email" defaultValue={email} required="required" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-3 align-self-center">
                                                        <label className="labels" htmlFor="#location">Your Location</label>
                                                    </div>
                                                    <div className="col-md-9 align-self-center">
                                                        <div className="form-group">
                                                            <input id="location" name="location" className="form-control" type="text" value={location} onChange={e => dispatch(setAdditionalInformation({ location: e.target.value, gender: gender, birthDate: birthDate, phone: phone, userBio: userBio, profileCompletion: profileCompletion }))} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-3 align-self-center">
                                                        <label className="labels" htmlFor="#phone">Phone Number</label>
                                                    </div>
                                                    <div className="col-md-4 align-self-center">
                                                        <div className="form-group">
                                                            <input id="phone" value={phone} name="phone" onChange={e => {
                                                                dispatch(setAdditionalInformation({ phone: e.target.value, location: location, gender: gender, birthDate: birthDate, userBio: userBio, profileCompletion: profileCompletion }))
                                                            }} className="form-control" type="tel" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row mt-4">
                                                    <div className="col-md-6">
                                                        <button onClick={onSubmit} className="btn btn-primary" type="submit">Save Changes</button>
                                                        <button className="btn btn-primary btn-simple" type="reset">Cancel</button>
                                                    </div>
                                                </div>
                                                {showAlert && <Alert color="success">Profile has been updated</Alert>}
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
                </div >
            </div >& gt;
        </div >
    );
}

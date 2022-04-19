/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
// reactstrap components
import { Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Alert } from "reactstrap";
import TransactionTable from "views/IndexSections/TransactionTable";
import DocsSignedRecTable from "views/IndexSections/DocsSignedRecTable"
import VerificationDoc from "./VerificationDoc";
import { useDispatch, useSelector } from "react-redux";
import { selectProfilePicLink, selectUserName, setProfilePicLink, selectUserEmail, setAdditionalInformation, selectGender, selectBirthDate, selectLocation, selectPhone, selectUserBio, selectRole } from "../../features/userSlice";
import { auth, storage, firestore } from "../../firebase"

export default function AccountSettings() {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName)
    const role = useSelector(selectRole)
    const gender = useSelector(selectGender)
    const birthDate = useSelector(selectBirthDate)
    const location = useSelector(selectLocation)
    const phone = useSelector(selectPhone)
    const email = useSelector(selectUserEmail)
    const userBio = useSelector(selectUserBio)
    const profilePicLink = useSelector(selectProfilePicLink)

    const counterFunc = () => {
        let count = 0;
        if (userName) count++;
        if (gender) count++;
        if (userBio) count++;
        if (birthDate) count++;
        if (email) count++;
        if (location) count++;
        if (phone) count++;
        return count;
    }

    const [imageAsFile, setImageAsFile] = useState('')
    const [profileCompletion, setProfileCompletion] = useState(0)
    const [counter, setCounter] = useState(counterFunc())
    const [submitting, setSubmitting] = useState(false)
    const [genderDropdown, setGenderDropdown] = useState(false)
    const [showAlert, setShowAlert] = useState(false);




    useEffect(() => {

        let count = counterFunc();
        setCounter(count)
        role ? (setProfileCompletion((counter / 5) * 100)) : (setProfileCompletion((counter / 7) * 100))

        console.log('After state change', counter)
    }, [submitting])

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

        firestore.collection('users').doc(auth.currentUser.uid).update({
            userName, gender, birthDate, location, phone, profileCompletion, userBio, email
        }).then(() => {
            console.log('Profile has been updated')
            setShowAlert(true)
            setSubmitting(false)
            dispatch(setAdditionalInformation({ userBio: userBio, profileCompletion: profileCompletion, gender: gender, birthDate: birthDate, location: location, phone: phone }))
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
                                                        <img src="/img/placeholder.jpg" alt="Logo/Profile Picture" />
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

                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#link2" role="tablist">
                                                    <i className="tim-icons icon-credit-card" /> Transactions
                                                </a>
                                            </li>
                                            <hr className="line-primary" />

                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#link3" role="tablist">
                                                    <i className="tim-icons icon-credit-card" /> Verification
                                                </a>
                                            </li>
                                            <hr className="line-primary" />
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
                                                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={profileCompletion} aria-valuemin={0} aria-valuemax={100} style={{ width: profileCompletion + '%' }}>
                                                    <span className="progress-value">{profileCompletion}%</span>
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
                                                        <label className="labels" htmlFor="#firstName">{role ? ("Instituition's user") : ("User Name")} </label>
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
                                                {
                                                    role ? (
                                                        <div></div>
                                                    ) : (
                                                        <>

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
                                                        </>
                                                    )
                                                }


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
                                                        <label className="labels" htmlFor="#location">{role ? ("Instituition's Address") : ("Your Location")}</label>
                                                    </div>
                                                    <div className="col-md-9 align-self-center">
                                                        <div className="form-group">
                                                            <input id="location" name="location" className="form-control" type="text" value={location} onChange={e => dispatch(setAdditionalInformation({ location: e.target.value, gender: gender, birthDate: birthDate, phone: phone, userBio: userBio, profileCompletion: profileCompletion }))} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-3 align-self-center">
                                                        <label className="labels" htmlFor="#phone">{role ? ("Instituition's Telephone") : ("Phone Number")}</label>
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
                                                <h2 className="text-uppercase">All Documents Issued</h2>
                                            </header>
                                            <hr className="line-primary" />
                                            <br />
                                            <TransactionTable />
                                            <br />

                                            <header>
                                                <h2 className="text-uppercase">All Documents Received</h2>
                                            </header>
                                            <hr className="line-primary" />
                                            <br />
                                            <DocsSignedRecTable />
                                        </div>


                                        <div className="tab-pane" id="link3">
                                            <div className="g-pos-rel h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-30--md">
                                                <header>
                                                    <h2 className="text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0">
                                                        Verify Document Signature</h2>
                                                </header>
                                                <hr className="line-primary" />
                                                <VerificationDoc />
                                            </div>
                                        </div>

                                        <div className="tab-pane" id="link!!">
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
            </div >
        </div >
    );
}

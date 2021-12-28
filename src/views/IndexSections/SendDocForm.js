/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectUserName, selectProfilePicLink, selectMetaAddress, selectRole } from "../../features/userSlice";
import { firestore } from "../../firebase"
import { create } from 'ipfs-core'
import toBuffer from 'it-to-buffer'

export default function SendDocForm() {

    const [receiver, setReceiver] = useState('')
    const [buffer,setBuffer] = useState(null)
    const metaAddress = useSelector(selectMetaAddress)
    const role = useSelector(selectRole)
    const [ipfs, setIpfs] = useState(null)
    const [mimeType, setMimeType] = useState('')
    const [b64, setB64] = useState(null)

    create().then(ipfs => {
        
        setIpfs(ipfs)
    })

    function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
        return (false)
    }

    const findUserInfo = (e) => {
        e.preventDefault();
        if (ValidateEmail(e.target.value)) {
            firestore.collection('users').where('email', '==', e.target.value).get().then((res) => {
                res.forEach(doc => {
                    //console.log(doc.id, '=>', doc.data());
                    setReceiver(doc.data())
                });
                console.log(receiver)
            })
        }
        setReceiver('')
    }

    const captureFile = (event) => {
        event.preventDefault()
        const file = event.target.files[0]
        const reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => {
        setBuffer(Buffer(reader.result)) 
        console.log('buffer', reader.result)
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        const results = (await ipfs.add(buffer))
        console.log(results.path)
        const bufferedContents = await toBuffer(ipfs.cat(results.path)) // returns a Buffer
        console.log(bufferedContents)
        setB64(Buffer(bufferedContents).toString('base64'))
        let image =  Buffer(b64, 'base64');
        console.log(image)
        setMimeType('image/jpg');
    }

    return (
        <div className="card-body">
            {
                metaAddress ? (
                    <>
                        {
                            role ? (
                                <>
                                 { <img  src={`data:${mimeType};base64,${b64}`}  /> }
                                    <form onSubmit={onSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Receiver's Name </label>
                                                    <input disabled type="text" className="form-control" value={receiver ? (receiver.userName) : ("Name")} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Receiver's Email address</label>
                                                    <input type="email" onChange={findUserInfo} className="form-control" placeholder="shreyas@email.com" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Message</label>
                                                    <input type="text" className="form-control" placeholder="Hello there!" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <label className="col-sm-3 col-form-label">Pay to</label>
                                            <div className="col-sm-9">
                                                <div className="form-group">
                                                    <input disabled type="text" className="form-control" placeholder="e.g. 1Nasd92348hU984353hfid" value={receiver ? (receiver.accountAddress ? (receiver.accountAddress) : ("The user is not connected to metamask")) : ("e.g. 1Nasd92348hU984353hfid")} />
                                                    <span className="form-text"> {receiver ? ("Metamask account address of " + receiver.email) : ("")}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <label className="col-sm-3 col-form-label">File</label>
                                            <div className="col-sm-9">
                                                <input type="file" onChange={captureFile} />
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-simple btn-primary btn-icon btn-round float-right"><i className="tim-icons icon-send" /></button>

                                    </form>
                                   
                                </>
                            ) : (
                                <>
                                Currently only organisations can issue documents!
                                </>
                            )
                        }

                    </>
                ) : (
                    <>
                        <p className="profile-description">Connect to Metamask for sharing files.</p>
                    </>
                )
            }

        </div>
    );
}

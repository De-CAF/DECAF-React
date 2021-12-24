import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectUserName, selectProfilePicLink } from "../../features/userSlice";
import { firestore } from "../../firebase"


export default function SendDocForm() {

    const [receiver, setReceiver] = useState('')

    function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
        return (false)
    }

    const findUserInfo = (e) => {
        e.preventDefault();
        if(ValidateEmail(e.target.value)){
            firestore.collection('users').where('email', '==', e.target.value).get().then((res)=>{
                res.forEach(doc => {
                    //console.log(doc.id, '=>', doc.data());
                    setReceiver(doc.data())
                  });
                  console.log(receiver)
            })
        }
        setReceiver('')
    }

    return (
        <div className="card-body">
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Receiver's Name </label>
                            <input disabled type="text" className="form-control" value={receiver?(receiver.userName):("Name")} />
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
                            <input disabled type="text" className="form-control" placeholder="e.g. 1Nasd92348hU984353hfid" value={receiver?receiver.accountAddress:"e.g. 1Nasd92348hU984353hfid"} />
                            <span className="form-text"> {receiver?("Metamask account address of "+receiver.email):("")}</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <label className="col-sm-3 col-form-label">File</label>
                    <div className="col-sm-9">
                        <input type="file" />
                    </div>
                </div>

                <button type="submit" className="btn btn-simple btn-primary btn-icon btn-round float-right"><i className="tim-icons icon-send" /></button>

            </form>
        </div>
    );
}

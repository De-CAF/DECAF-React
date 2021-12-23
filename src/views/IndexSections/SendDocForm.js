import React from "react";

export default function SendDocForm() {
    return (
        <div className="card-body">
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Receiver's Name</label>
                            <input disabled type="text" className="form-control" defaultValue="Mike" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Receiver's Email address</label>
                            <input type="email" className="form-control" placeholder="mike@email.com" />
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
                            <input disabled type="text" className="form-control" placeholder="e.g. 1Nasd92348hU984353hfid" />
                            <span className="form-text">Metamask account address of 'USEREMAIL'.</span>
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

import React from "react";

export default function SendDocForm() {
    return (
        <div className="card-body">
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Your Name</label>
                            <input type="text" className="form-control" defaultValue="Mike" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="mike@email.com" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="text" className="form-control" defaultValue="001-12321345" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Company</label>
                            <input type="text" className="form-control" defaultValue="CreativeTim" />
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
                            <input type="text" className="form-control" placeholder="e.g. 1Nasd92348hU984353hfid" />
                            <span className="form-text">Please enter a valid address.</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <label className="col-sm-3 col-form-label">Amount</label>
                    <div className="col-sm-9">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="1.587" />
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn btn-simple btn-primary btn-icon btn-round float-right"><i className="tim-icons icon-send" /></button>

            </form>
        </div>
    );
}

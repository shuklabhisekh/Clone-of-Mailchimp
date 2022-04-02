import React from "react";
import "./Pay_succc.css";
import { Link } from "react-router-dom";
export const Pay_succes = () => {
  return (
    <div className="successfull-msg">
      <div id="myModal" className="modal fade">
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header">
              <div className="icon-box">
                <i className="material-icons">&#xE876;</i>
              </div>
            </div>
            <div className="modal-body">
              <h4 className="modal-title ">Awesome!</h4>
              <p className="text-center">
                Your Transaction has been successfully submitted.
              </p>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-success btn-block"
                data-dismiss="modal"
              >
                <Link to="/dashboard" style={{ color: "#fff" }}>
                  OK
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

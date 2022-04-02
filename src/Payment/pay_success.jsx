import React from "react" 
import "./Pay_succc.css"

export const Pay_succes = () => {
    return (

         <div>
            <div id="myModal" className="modal fade">
            <div className="modal-dialog modal-confirm">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="icon-box">
                            <i className="material-icons">&#xE876;</i>
                        </div>				
                        <h4 className="modal-title w-100">Awesome!</h4>	
                    </div>
                    <div className="modal-body">
                        <p className="text-center">Your Transaction has been successfully submitted.</p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-success btn-block" data-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
        </div> 
    </div>

    )
}
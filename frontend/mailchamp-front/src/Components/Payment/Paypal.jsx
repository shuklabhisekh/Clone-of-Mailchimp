import { React } from "react";
import "./payment.css";


export const Paypal = () => {
  return (
    <div>
      <div className="paypal-div">
        <img
          className="paypal-image"
          src="https://us14.admin.mailchimp.com/images/third-party-logos/paypal.svg"
          alt=""
        />
        <span className="paypal-span">
          PayPal balance, eCheck, credit, and more
        </span>
      </div>
      <div>
        <button className="paypal-connect-btn">
          <a
            href="https://www.paypal.com/agreements/approve?nolegacy=1&ba_token=BA-2V650559F6920903G"
          >
            Connect to PayPal
          </a>
        </button>
      </div>
    </div>
  );
};
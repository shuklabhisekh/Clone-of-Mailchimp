import { useContext, useState } from "react";
import "./payment.css";
import { Crcard } from "./Crcard";
import { Paypal } from "./Paypal";
import {Pay_succes} from "./pay_success"



export const Payment = () => {
  const [payment, setPayment] = useState("vikas");
  const [show, setShow] = useState(true);




  return (
    <div className="main-container">
      <div>
        <div className="container">
          <div className="main-div">
            <div className="four-divs">
              <div className="div1">
                <div className="header-div">
                  <h3>payment method</h3>
                </div>
                <div className="card-details-div">
                    <nav className="payment-btns">
                        <button
                            className="payment-btns-btn"
                            onClick={() => {
                                setPayment("vikas");
                            }}
                        >
                        <p>Credit card</p>
                        </button>

                        <button
                            className="payment-btns-btn"
                            onClick={() => {
                            setPayment("paypal");
                            }}
                        >
                        <p>Paypal</p>
                        </button>

                        <hr />
                    </nav>
                  {payment === "vikas" ? <Crcard /> : <Paypal />}
                </div>
              </div>
              <hr />

                <div id="div2" className="div2">

                        <div className=" header-div contact-div">
                            <div className="contact-div-header">
                                <h3>Conteact address</h3>
                            </div>
                        </div>

                        <div>
                            <h3>Vikas Gupta</h3>
                            <h3>Rudrapur</h3>
                            <h3>Uttrakhand, India</h3>
                            <h3>263153</h3>
                        </div>
                </div>

              <hr />

            <div id="div3" className="div3">
                <div className="tax-setting-div">
                  <div className=" header-div tax-setting-header">
                    <h3>Tax setting</h3>
                  </div>
                </div>

                <div className="tax-right-div">
                  <span>Registered VAT/GST/Tax ID</span>
                  <span className="optional">(optional)</span>

                  <div className="tax-setting-input">
                    <input type="text" />
                  </div>

                  <div className="tax-setting-btns">
                    <button className="tax-save-btn">Save</button>
                    <button className="tax-cancel-btn">Cancel</button>
                  </div>
                </div>
            </div>
              <hr />
              <div className="div4">
                <div className="billing-header">
                  <h3>Billing adress</h3>
                </div>
                <div className="billing-address">
                  <input type="checkbox" />
                  <span>Same as contact address</span>
                </div>
              </div>
            </div>
          </div>
          <div className="purchase-total-div">
            <div className="purchase-header">
              <h3>Purchase Summery</h3>
                <span>
                 Build in 
                    <select className="indian-rupees">
                        <option >Indian Rupee</option>
                        <option>Us Dollars </option>
                    </select>
                </span>

            </div>
            <div className="total-payment-list">
              <div className="payment-list heading-list">
                <span>Essential Plan</span>
                <span>₹{199}.00</span>
              </div>
              <div className="payment-list">
                <span>{300} Contacts*</span>
              </div>
              <div className="payment-list">
                <span>{"vikas@gmail.com"} Emails*</span>
              </div>
              <div className="payment-list heading-list another-list">
                <span>Tax</span>
                <span>₹0.00</span>
              </div>
              <hr />
              <div className="payment-list heading-list another-list total-payment">
                <span>Total</span>
                <span>₹{300}.00</span>    
              </div>
              <hr />




              <button  href="#myModal"    className="paynow-btn"   data-toggle="modal">Pay now</button>
              <Pay_succes/>


              <p className="payment-paragraph">
                By selecting “Pay Now”, I understand that I am enrolling in a subscription plan and I authorize Mailchimp to charge my payment method each month for the amount specified above (plus applicable taxes) unless I cancel. I can cancel anytime by going to my Billing page in the Account Settings.br<br/><br/>
                *When you exceed your limit, you incur additional charges of ₹390.00/mo per additional 250 contacts (comes with additional 2,500 email sends).
              </p>
              <a href="" className="payment-link">Learn more</a>
            </div>
            <div className="email-edit">

                <span>
                    <p>Your receipt will be sent to</p><br />
                    <b>vikas@gmail.com</b>
                </span>
           
            </div>
            <p className="last-paragraph">
              Actual price may vary. Prices displayed are estimates based on
              current exchange rates. Exact amount charged will vary and depends
              on the exchange rate at the time of payment processing. Prices
              displayed exclude any applicable taxes and fees, which will be
              added to the cost of all services purchased. For exact base
              pricing please refer to prices listed in USD.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

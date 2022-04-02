import "./PaymentSelection.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";

export const PaymentSelection = () => {
  return (
    <div id="page">
      <div id="paymentNav">
        <div></div>
        <div id="selectaPlan">Select A Plan</div>
        <div id="x">
          <Link to="/dashboard">
            <ClearIcon />
          </Link>
        </div>
      </div>
      <div id="selectionSmall">
        <div>Selection</div>
        <div>
          <ArrowForwardIosIcon id="ArrowForwardIosIcon" />
        </div>
        <div>Payment</div>
        <div>
          <ArrowForwardIosIcon id="ArrowForwardIosIcon" />
        </div>
        <div>Confirmation</div>
      </div>
      <div id="selectionBox">
        <div id="recommend">Mailchimp Recommends</div>
        <div id="PriceSummary">
          <div id="priceCard">
            <div style={{ borderRight: "none" }}>
              <div id="premiumInput">
                <div>Premium</div>
                <input id="premiumRadio" type="radio" />
              </div>
              <div id="premiumAdvanced">
                Advanced features for pros who need more customization.
              </div>
              <div id="PremiumYou">You'll pay</div>
              <div id="PremiumPriceLogo" className="PremiumPriceLogo0">
                <div id="priceLogo"> ₹</div>
                <div>23000</div>
              </div>
              <div id="month">a month</div>
              <div id="tenthousand">
                with 10,000 <span>contacts</span>
              </div>
            </div>
            <div>
              <div id="premiumInput">
                <div>Standard</div>
                <input id="premiumRadio" type="radio" />
              </div>
              <div id="premiumAdvanced">
                Better insights for growing businesses that want more customers.
              </div>
              <div id="PremiumYou">You'll pay</div>
              <div id="PremiumPriceLogo" className="PremiumPriceLogo1">
                <div id="priceLogo"> ₹</div>
                <div>1150</div>
              </div>
              <div id="month">a month</div>
              <div id="tenthousand">
                with 500 <span>contacts</span>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "rgb(229,242,243)",
                border: "1px solid darkcyan",
              }}
              id="essential"
            >
              <div id="premiumInput">
                <div>Essentials</div>
                <input id="premiumRadio" checked type="radio" />
              </div>
              <div id="premiumAdvanced">
                Must-have features for email senders who want added support.
              </div>
              <div id="PremiumYou">You pay</div>
              <div id="PremiumPriceLogo" className="PremiumPriceLogo2">
                <div id="priceLogo"> ₹</div>
                <div>770</div>
              </div>
              <div id="month">a month</div>
              <div id="tenthousand">
                with 500 <span>contacts</span>
              </div>
            </div>
            <div>
              <div id="premiumInput">
                <div>Free</div>
                <input id="premiumRadio" type="radio" />
              </div>
              <div id="premiumAdvanced">
                All the basics for businesses that are just getting started.
              </div>
              <div id="PremiumYou">You'll pay</div>
              <div id="PremiumPriceLogo" className="PremiumPriceLogo3">
                <div id="priceLogo"> ₹</div>
                <div>0</div>
              </div>
              <div id="month">a month</div>
              <div id="tenthousand">
                2,000 <span>contacts maxium</span>
              </div>
            </div>
          </div>
          <div id="summaryCard">
            <div id="greyPart">
              <div id="purchaseSummary">Purchase Summary</div>
              <div id="billedIn">
                Billed in
                <select name="" id="paymentSelectOption">
                  <option value="">Indian Rupee</option>
                  <option value="">US Dollars</option>
                </select>{" "}
              </div>
            </div>
            <div id="otherPart">
              <div id="essentialPrice">
                <div>Essentials plan</div>
                <div>₹770.00</div>
              </div>
              <div id="fivehun">500 contacts*</div>
              <div>5,000 email sends*</div>
              <div id="otherPartDetail">
                *When you exceed your limit, you incur additional charges of
                ₹390.00/mo per additional 250 contacts (comes with additional
                2,500 email sends).
              </div>
              <div id="learnMore">Learn More</div>
              <button id="upgrade">
                <Link to="/paymentSection">Upgrade</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="comparePlan">
        <ArrowForwardIosIcon id="arrowForwardCompare" />
        <div>Compare Plan Features</div>
      </div>
    </div>
  );
};

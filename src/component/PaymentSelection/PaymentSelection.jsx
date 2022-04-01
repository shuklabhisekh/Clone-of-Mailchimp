import "./PaymentSelection.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ClearIcon from "@mui/icons-material/Clear";
export const PaymentSelection = () => {
  return (
    <div id="page">
      <div id="paymentNav">
        <div></div>
        <div id="selectaPlan">Select A Plan</div>
        <div id="x">
          <ClearIcon />
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
            <div>
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
            <div id="essential">
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
                <div>700</div>
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
            <div id="otherPart"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

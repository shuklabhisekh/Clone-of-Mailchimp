import "./PaymentSelection.css";
import ClearIcon from "@mui/icons-material/Clear";
export const PaymentSelection = () => {
  return (
    <div id="page">
      <div id="paymentNav">
        <div></div>
        <div>Select A Plan</div>
        <div id="x">x{/* <svg data-testid="ClearIcon"></svg> */}</div>
      </div>
      <div id="selectionSmall">
        <div>Selection</div>
        <div>i</div>
        <div>Payment</div>
        <div>i</div>
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
          <div id="summaryCard"></div>
        </div>
      </div>
    </div>
  );
};

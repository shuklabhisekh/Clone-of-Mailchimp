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
                <input type="radio" />
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div id="summaryCard"></div>
        </div>
      </div>
    </div>
  );
};

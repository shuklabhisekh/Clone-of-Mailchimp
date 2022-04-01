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
      </div>
    </div>
  );
};

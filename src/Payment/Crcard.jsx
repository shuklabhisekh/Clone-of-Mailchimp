import "./payment.css";
export const Crcard = () => {
  return (
    <div>
      <div className="card-img-div">
        <img
          src="https://us14.admin.mailchimp.com/images/icons/amex.png"
          alt=""
        />
        <img
          src="https://us14.admin.mailchimp.com/images/icons/disc.png"
          alt=""
        />
        <img
          src="https://us14.admin.mailchimp.com/images/icons/mast.png"
          alt=""
        />
        <img
          src="https://us14.admin.mailchimp.com/images/icons/visa.png"
          alt=""
        />
      </div>
      <div className="from-container">
        <form action="">
          <div className="card-number-div">
            <div className="card-number-text">
              <h3>Card Number</h3>
            </div>
             {/* <div className="card-input-div"> */}
              <input
                type="text"
                placeholder="1111 2222 3333 4444"
                // id="card-number-input"

              />
            {/* </div> */}
          </div>
          <div className="expire-cvv-details-div">
            <div className="expire-detail-div">
              <h3>Expires</h3>
              <div className="month-year-input-div">
                <input type="text" placeholder="MM" className="month-input" />
                <input type="text" placeholder="YY" className="year-input" />
              </div>
            </div>
            <div className="cvv-detail-div">
              <h3>CVV</h3>
              <input type="text" placeholder="123" />
            </div>
          </div>
          <div className="save-btn">
            <button>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};
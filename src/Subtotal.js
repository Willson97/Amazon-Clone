import React from "react";
import "./subtotal.css";
import Currencyformat from "react-currency-format";
import { useStateValue, getBasketTotal } from "./StateProvider";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const [state, dispatch] = useStateValue();
  const history = useHistory();

  return (
    <div className="subtotal">
      <Currencyformat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({state.basket?.length})items: <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(state.basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        onClick={(e) => {
          history.push("/payment");
        }}
      >
        Proceed To chekout
      </button>
    </div>
  );
}

export default Subtotal;

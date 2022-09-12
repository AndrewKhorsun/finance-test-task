import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../features/quotes/quotesSlice";

export const Modal = ({ modalName }) => {
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.quotes.value.filter((el) => el.ticker === modalName)[0]
  );

  return (
    <div id="modal-js-example" className="modal is-active">
      <div className="modal-background"></div>

      <div className="modal-content">
        <div className="box">
          <p>More information about: {data.ticker}</p>

          <table class="table" role="table">
            <thead>
              <tr>
                <th>Exchange</th>
                <th>Price</th>
                <th>Change</th>
                <th>Change %</th>
                <th>Dividend</th>
                <th>Yield</th>
                <th>Last trade time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.exchange}</td>
                <td>{data.price}</td>
                <td>{data.change}</td>
                <td>{data.change_percent}</td>
                <td>{data.dividend}</td>
                <td>{data.yield}</td>
                <td>{data.last_trade_time}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <button
        className="modal-close is-large"
        onClick={() => dispatch(openModal(false))}
        aria-label="close"
      ></button>
    </div>
  );
};

import React from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, openModal } from "../../features/quotes/quotesSlice";
import { Modal } from "../Modal/Modal.jsx";

export function Ticker({ data }) {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.quotes.modal);

  return (
    <div className="ticker">
      <div className="ticker__title ">{data.ticker}</div>
      <div className="ticker__conteiner">
        <div className="ticker__element">{`${data.price} $`}</div>
        <div
          className={classNames("ticker__element", {
            red: data.change < 0,
            green: data.change > 0,
          })}
        >
          {`${Math.abs(data.change)} $`}
        </div>
        <div
          className={classNames("ticker__element", {
            red: data.change_percent < 0,
            green: data.change_percent > 0,
          })}
        >
          <div
            className={classNames("arrow", {
              arrow__up: data.change_percent > 0,
              arrow__down: data.change_percent < 0,
            })}
          ></div>
          <p>{`${Math.abs(data.change_percent).toFixed(2)} %`}</p>
        </div>
        <button
          type="button"
          className="button is-link is-inverted"
          onClick={() => dispatch(openModal({open:true, modalValue: data}))}
        >
          more
        </button>
        <button
          type="button"
          className="button is-link is-inverted"
          onClick={() => dispatch(deleteData(data.ticker))}
        >
          X
        </button>
      </div>
      {modal.open && <Modal modalName={modal.modalValue.ticker} />}
    </div>
  );
}

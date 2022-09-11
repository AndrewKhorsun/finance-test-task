import React from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { deleteData } from "../features/quotes/quotesSlice";

export function Ticker({ data }) {
  const dispatch = useDispatch();

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
          className="btn btn-outline-dark"
          onClick={() => dispatch(deleteData(data.ticker))}
        >
          X
        </button>
      </div>
    </div>
  );
}

import classNames from "classnames";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App/App.css";
import { Ticker } from "../Ticker/ticker";
import {
  getQuotes,
  setData,
  connected,
} from "../../features/quotes/quotesSlice";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.quotes.value);
  const connection = useSelector((state) => state.quotes.connect);

  useEffect(() => {
    if (true) {
      dispatch(
        getQuotes((response) => {
          dispatch(setData(response));
        })
      );
    }
  }, [dispatch]);

  return (
    <>
      <div className="App">
        <h1 className="title">Finance test task</h1>
        <ul>
          {data.map((el) => (
            <li>
              <Ticker key={el.ticker} data={el} />
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={classNames("button is-light", {
            "is-success": connection,
            "is-warning": !connection,
          })}
          onClick={() => {
            dispatch(connected(!connection));
          }}
        >
          {connection ? "Tickers OFF" : "Tickers ON"}
        </button>
      </div>
    </>
  );
}

export default App;

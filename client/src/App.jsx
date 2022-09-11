import classNames from "classnames";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Ticker } from "./components/ticker";
import { getQuotes, setData, connected } from "./features/quotes/quotesSlice";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.quotes.value);
  const con = useSelector((state) => state.quotes.connect);
  const btnClass = con ? "btn-outline-info" : "btn-outline-danger";

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
    <div className="App">
      {data.map((el) => (
        <Ticker key={el.ticker} data={el} />
      ))}
      <button
        type="button"
        className={classNames("btn m-5", {"btn-outline-dark": con, "btn-outline-danger": !con})}
        onClick={() => {
          dispatch(connected(!con));
        }}
      >
        {con ? "Tickers OFF" : "Tickers ON"}
      </button>
    </div>
  );
}

export default App;

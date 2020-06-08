// LightContainer.js
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  counter: state,
});

// const LightComponent = ({ light }) => <div>{light}</div>;

const CounterContainer = ({ counter, dispatch }) => (
  <div>
    <p>{counter}</p>
    <button onClick={() => dispatch({ type: "ADD" })}>Ajoute 1</button>
    <button onClick={() => dispatch({ type: "REMOVE" })}>Retire 1</button>
    <button onClick={() => dispatch({ type: "ADD10" })}>Ajoute 10</button>
    <button onClick={() => dispatch({ type: "REMOVE10" })}>Retire 10</button>
    <button onClick={() => dispatch({ type: "RESET" })}>Remise à 0</button>
  </div>
);

export default connect(mapStateToProps)(CounterContainer);

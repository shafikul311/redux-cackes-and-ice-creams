import React from "react";
import { buyCoke } from "../redux";
import { connect } from "react-redux";

const CocaColaContainer = (props) => {
   return (
      <div>
         <h1>Number of coca cola {props.numOfCoke}</h1>
         <button onClick={props.buyCoke}>Buy Coke</button>
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      numOfCoke: state.coke.numOfCoke,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      buyCoke: () => dispatch(buyCoke()),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(CocaColaContainer);


import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const NewCakeContainer = (props) => {

    const [ number, setNumber] = useState(1)
    console.log(number)
   return (
      <div
         style={{
            border: "1px solid black",
            borderRadius: "5px",
            padding: "5px",
         }}
      >
         <h1>Number Of cakes {props.numOfCakes}</h1>
         <input type="text" value={number} onChange={e=> setNumber(e.target.value)} />
         <button onClick={()=> props.buyCake(number)}>Buy Cakes </button>
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      numOfCakes: state.cake.numOfCakes,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      buyCake: number => dispatch(buyCake(number)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
import React from 'react';
import { buyIceCream } from '../redux'; 
import { connect } from 'react-redux';

const IceCreamContainer = (props) => {
    // console.log(props)
    return (
        <div>
            <h1>Number of IceCreams {props.numOfIceCream}</h1> 
            <button onClick={props.buyIceCream}>Buy IceCream</button>
            
        </div>
    );
};


const mapStateToProps = (state )=> {
    console.log(state)
    return {
        numOfIceCream : state.iceCream.numOfIceCream 
        
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: ()=> dispatch(buyIceCream())

    }
}

export default connect( mapStateToProps, mapDispatchToProps) ( IceCreamContainer);
import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

const CakeContainer = (props) => {
    return (
        <div style={{border: '1px solid black', borderRadius: '5px', padding: '5px'}} >
            <h1>Number Of cakes {props.numOfCakes}</h1>
            <button onClick={props.buyCake}>Buy Cakes </button>
            
        </div>
    );
};


const mapStateToProps = (state) => {
    // console.log(state)
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake()),
    }
}

export default connect( mapStateToProps, mapDispatchToProps ) ( CakeContainer );
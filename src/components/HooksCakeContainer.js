import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {buyCake} from '../redux'


function HooksCakeContainer() {
    const numCakes = useSelector(state => state.cake.numOfCakes )

    const dispatchCake = useDispatch()


  return (
    <div style={{border: '1px solid black', borderRadius: '5px', padding: '5px'}}>
        <h2>Number of cakes {numCakes}</h2>
        <button onClick={() => dispatchCake(buyCake())}>Buy Cake </button>
    </div>
  )
}

export default HooksCakeContainer
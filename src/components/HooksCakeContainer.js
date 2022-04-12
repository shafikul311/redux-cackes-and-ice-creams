import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {buyCake} from '../redux'


function HooksCakeContainer() {
    const numCakes = useSelector(state => state.numOfCakes )

    const dispatchCake = useDispatch()


  return (
    <div>
        <h2>Number of cakes {numCakes}</h2>
        <button onClick={() => dispatchCake(buyCake())}>Buy Cake </button>
    </div>
  )
}

export default HooksCakeContainer
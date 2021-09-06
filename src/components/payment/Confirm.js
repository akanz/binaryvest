import React, { useContext } from 'react'
import Crypto from './Crypto'
import Card from './Card'
import { payContext } from '.'

const Confirm = () => {
    const payOption = useContext(payContext)
    console.log(payOption[0])
    return (
        <div>
            {payOption[0] === 1 ? <Crypto /> : <Card />}
            
           
        </div>
    )
}

export default Confirm

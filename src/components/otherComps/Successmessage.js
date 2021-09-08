import React from 'react'

const Successmessage = ({children}) => {
    return (
        <div
      className={`message bg-blueish `}
    >
        {children}
    </div>
    )
}

export default Successmessage

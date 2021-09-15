import React from 'react'

const Successmessage = ({children}) => {
    return (
        <div
      className={`message bg-turquoise `}
    >
        {children}
    </div>
    )
}

export default Successmessage

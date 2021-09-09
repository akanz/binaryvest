import React from 'react'
import { AiOutlineLoading } from "react-icons/ai";

const Loader = () => {
    return (
        <div className="flex mt-20 justify-center">
          <AiOutlineLoading className="animate-spin w-2/10 h-2/10 text-blueish" />
        </div>
    )
}

export default Loader

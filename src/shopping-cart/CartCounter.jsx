'use client'
import React, { useState } from 'react'

export const CartCounter = () => {

    const [count, setcount] = useState(1)

  
    const handleIncrement = () => setcount(count+1)
    const handleDecrement = () => setcount(count-1)

    return (
        <>
            <span>Productos en el carrito</span>
            <span className="text-9xl"> {count} </span>

            <div className="flex">
                <button
                    onClick={handleIncrement}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    +1
                </button>
                <button
                    onClick={handleDecrement}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    -1
                </button>
            </div>
        </>
    )
}

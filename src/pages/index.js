import '../styles/global.css'
import * as React from "react"
import { AiOutlineShoppingCart } from 'react-icons/ai';

// markup
const IndexPage = () => {
  return (
    <main className="bg-gray-200 h-screen w-screen">
        <header className="w-screen p-4 justify-center flex absolute">
            <h1 className="text-3xl">guitarwag</h1>
        </header>
        <div className="w-screen px-8 pt-16 pb-8 justify-between flex" >
            <div className="gap-4 flex w-auto">
            <button onClick={() => alert('Hi')} className="bg-gray-300 p-3 hover:bg-gray-400">
                ASK FOR A CUSTOM ORDER
            </button>
            <button onClick={() => alert('Hi')} className="bg-gray-300 p-3 hover:bg-gray-400">
                VIDEOS
            </button>
            </div>
            <div className="gap-4 flex w-auto">
                <button onClick={() => alert('Hi')} className="bg-gray-300 p-3 hover:bg-gray-400">
                    FINISH ORDER
                </button>
                <button onClick={() => alert('Hi')} className="bg-gray-300 p-3 hover:bg-gray-400">
                    <AiOutlineShoppingCart />
                    <p className="relative">
                        2
                    </p>
                </button>
            </div>
        </div>
        <div className="w-screen px-8 justify-between flex flex-col">
            <input placeholder="search for a pack..." className="p-4 w-full"/>
            <div className="flex">
            <div className="flex p-2 gap-2 items-center">
                <input type="checkbox"/>
                <p>free</p>
            </div>
            <div className="flex p-2 gap-2 items-center">
                <input type="checkbox"/>
                <p>paid</p>
            </div>
            </div>
        </div>
        <div className="w-screen px-8 justify-between flex flex-col">

        </div>
    </main>
  )
}

export default IndexPage

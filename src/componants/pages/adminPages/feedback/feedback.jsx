import { useState } from "react"

export default function Feedback()
{
    const [num, setnm] = useState(0)
    return(
        <div className="w-full bg-amber-600 flex justify-center items-center">
        <button className="text-white font-bold text-2xl"
        onClick={
            ()=>{
                const newnum = num - 1
                setnm(newnum)
            }}>
            -
        </button>
        <span className="text-white font-bold text-2xl mx-5">
        {num}
        </span>
        <button className="text-white font-bold text-2xl" 
        onClick={
            ()=>{
                const newnum = num + 1
                setnm(newnum)
            }}>
            +
        </button>
        </div>
    )
}
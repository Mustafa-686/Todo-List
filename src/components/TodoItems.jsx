import { FaRegCircle } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";


import { MdDelete } from "react-icons/md";



export const TodoItems = ({ text, id, isComplete, deleteTodo, toogle, dateTime }) => {

    return (
        <div className='flex items-center my-3  gap-2'>
            <div onClick={() => { toogle(id) }} className='flex flex-1 items-center cursor-pointer' >

                <span className={`bordernone rounded-full bg-orange-600
                     w-5 h-5 text-white text-lg font-medium
                     cursor-pointer text-center ${!isComplete ? "bg-transparent border border-solid border-black" : ""} `}>
                    {isComplete ? <TiTickOutline />
                        : <FaRegCircle />
                    }</span>

                <div className="flex justify-between items-center flex-1 ml-4 h-10 rounded-full
                 border border-solid border-black  p-6 mr-2 ">

                    <p className={`text-slate-700 ml-4 font-bold text-[17px] ${isComplete ? "line-through" : ""} `}>{text}
                        <span className="text-sm text-gray-500 " > <br />{dateTime}</span></p>
                </div>
                <span onClick={() => { deleteTodo(id) }} className=" cursor-pointer text-xl font-medium
                     bg-orange-600 text-white ml-0
                     rounded-full"><MdDelete />
                </span>


            </div>
        </div>
    )
}





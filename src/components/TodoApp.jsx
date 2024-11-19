import React, { useEffect, useRef, useState } from 'react'
import { RiCalendarTodoLine } from "react-icons/ri";
import { TodoItems } from './TodoItems';
import { getLocalStorageTodaData, setLocalStorageTodaData } from './getLocalStorageTodoData';




export const TodoApp = ({ text }) => {


    const [TodoList, setTodoList] = useState(() => getLocalStorageTodaData());

    const [dateTime, setDateTime] = useState("");


    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();
        if (inputText === "") {
            return null;
        }
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
            dateTime: new Date().toLocaleString()

        }
        setTodoList((prev) => [...prev, newTodo]);
        inputRef.current.value = "";
    }
    const deleteTodo = (id) => {
        setTodoList((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id)
        })
    }

    setLocalStorageTodaData(TodoList);

    const toogle = (id) => {
        setTodoList((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isComplete: !todo.isComplete }
                }
                return todo;
            })
        })
    }
    useEffect(() => {
        setLocalStorageTodaData(TodoList); // Store TodoList in local storage when it changes
    }, [TodoList]);

    useEffect(() => {
        // console.log(TodoList);
    }, [TodoList])

    setInterval(() => {
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();
        setDateTime(`${formattedDate}  -  ${formattedTime}`)
    }, 1000)

    return (

        <div className='bg-white place-self-center  flex flex-col
        p-7  min-h-[550px] rounded-xl w-11/12 max-w-md'>

                {/* Title */}

            <div className='flex items-center  mt-7 gap-2'>
                <span className="w-8 text-3xl"> <RiCalendarTodoLine /></span>

                <h1 className="text-3xl font-semibold"> TO DO List</h1>
            </div>
            <h1 className="p-3 text-lg "> {dateTime} </h1>

                {/* Input box */}
                
            <div className='flex items-center my-7 text-slate-700 bg-gray rounded-full'>
                <input ref={inputRef} className="bg-transparent border-0 outline-none 
              flex-1 h-14 pl-6 pr-
              " type='text' placeholder='Add Your task' />
                <button onClick={add} className='border-none rounded-full bg-orange-600
               w-28 h-12 text-white text-lg font-medium
              cursor-pointer'>ADD + </button>
            </div>
            <div className='overflow-y-scroll max-h-72'>
                {TodoList.map((item, index) => {
                    return <TodoItems key={index}
                        text={item.text} id={item.id}
                        isComplete={item.isComplete}
                        deleteTodo={deleteTodo}
                        toogle={toogle}
                        dateTime={item.dateTime}
                    />
                })}


            </div>
        </div>

    )
}
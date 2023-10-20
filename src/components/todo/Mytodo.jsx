import React, { useState } from 'react'
import { AiOutlineDelete } from "react-icons/ai";

function Mytodo() {
  const[text, setText]=useState('');
  const[arr, setArr]=useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setArr([...arr,text]);
    setText('')
  }
  const handledelete = (id)=>{
    const result =arr?.filter((res, index)=>{
      return index !== id;
    })
    setArr(result);
  }
  console.log(arr);
  return (
    <div className='w-[80%] mx-auto mt-20 '> 
      <div className='w-[40%] bg-white rounded shadow px-5 py-2 space-y-2 ml-72'>
        <h1>To Do List</h1>
        <form onSubmit={handleSubmit} className='w-full'>
          <input value={text || ''} onChange={(e)=>setText(e.target.value)} className="py-2 px-5 rounded shadow border-2"type="text" name="" id="" />
          <button className="py-2 px-5 rounded shadow bg-[#2b1701;] ml-5 text-white border-2 outline-none " type="submit">Add toDo</button>
        </form>
        <div className="mt-20 flex flex-col justify-start items-start gap-4">
          {
            arr?.map((res , index) => {
              return(
                <div key={index} className='flex flex-row'>
                 <h1> {res}</h1>
     <AiOutlineDelete className='mt-1 ml-2' onClick={()=>handleSubmit(index)}/>
                </div>
              )
            })
          }
        </div>

          </div>
    </div>
  )
}

export default Mytodo

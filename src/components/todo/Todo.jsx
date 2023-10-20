import { useState } from "react";
import { TiDelete } from "react-icons/ti";

const Todo = () => {

	const [text , setText] = useState('');
	const [arr , setArr] = useState([]);

	console.log('arr : ',arr);

	const handleSubmit = (e) => {
		e.preventDefault();
		setArr([...arr, text])
		setText(' ')
	}

	const handledelete = (id) => {
		const result = arr?.filter(( res , index) => {
			return index !== id
		})
		setArr(result)
	}

	return (
		<div className=" w-[80%] mx-auto  ">

			<div className="p-5 w-[40%] mt-20 mx-auto bg-white text-lg shadow rounded space-y-3">
				<h1 className="text-xl">Todo List </h1>
				<form onSubmit={handleSubmit} className="w-full space-x-2">
					<input value={text || ' '}  className="px-5 py-2 rounded shadow border-2 border-slate-900 outline-none" type="text" placeholder="todo..."
					onChange={(e) => setText(e.target.value)}/>
					<button type="submit" className="px-5 py-2 rounded shadow bg-slate-900 text-white">addtodo</button>
				</form>

				<div className="mt-20 flex flex-col justify-start items-start gap-4">
					{
						arr?.map((res , index) => {
							return (
								<div className="w-full flex flex-row justify-start items-center gap-2" key={index}>
									<p>{res}</p>
                                    
									<TiDelete size={20} className="text-red-500 mt-1 cursor-pointer"
									onClick={()=> handledelete(index)}/>
								</div>
							)
						})
					}
				</div>
			</div>

		</div>

	)
}
export default Todo;
import React,{useState} from 'react'
import { X } from 'lucide-react';


const App = () => {

   const[title, setTitle] = useState('');
   const[details, setDetails] = useState('');

   const[task, setTask] = useState([]);

  const submitHandler = (e)=>{
    e.preventDefault();
    // console.log(title,details);

    const copyTask = [...task];
    copyTask.push({title,details});
    setTask(copyTask);
    // console.log(copyTask);

    // console.log(task);
    // console.log(copyTask);
    // console.log(task);
    // console.log(title);
    // console.log(details);
    setTitle('');
    setDetails('');
  }

  const deleteNote = (idx)=>{
    // console.log('Note Deleted');
    const copyTask = [...task];
    // console.log(copyTask[idx]);
    copyTask.splice(idx,1);
    setTask(copyTask);
  }


  return (
    <div className='h-screen lg:flex bg-black text-white'>
      
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className = 'flex gap-4 lg:w-1/2 flex-col items-start p-10'>
        <h1 className='text-4xl font-bold'>Add Notes</h1>

        {/* PEHLA INPUT FOR HEADING */}
        <input
          type="text" 
          placeholder='Enter Notes Heading'
          className='px-5 w-full py-2 font-medium border-2 outline-none rounded'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value);
          }}
        />

        {/*DETAILED WALA INPUT */}
        <textarea
         type="text" 
         placeholder='Write Details Here'
         className='px-5 w-full h-32 py-2 font-medium flex items-start flex-row border-2 outline-none rounded'
         value={details}
         onChange={(e)=>{
          setDetails(e.target.value);
         }}
        />

        <button
         className='bg-white active:scale-95 font-medium w-full text-black outline-none px-5 py-2 rounded'
        >
          Add Notes
        </button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
          {task.map(function(elem,idx){
            return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 rounded-xl bg-cover text-black bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3WK45w9N3g0duu2qx_sTFbGhu862GzjLtbg&s')]">
              <div>
                <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                <p className='mt-4 leding-tight font-medium text-gray-500'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx);
              }} className='w-full bg-red-600 py-1 text-xl rounded font-bold text-white'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App

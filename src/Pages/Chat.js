import React from 'react'
// import { Link } from 'react-router-dom';
// import profile from '../components/assets/profile.svg'
import Header from './../Components/Header';

const Chat = (props) => {
  return (
    <div>
        <Header/>
    <div className='flex md:flex-row flex-col w-full h-[91.5vh]'>
      <div className='w-full md:w-[15%] bg-slate-800'>
        <label htmlFor="newPdf" className='text-white text-center pt-3 mt-2 text-sm font-poppins border-[2px] border-dashed border-white rounded w-[70%] h-14 ml-[15%] cursor-pointer'>Drop PDF</label>
        <input type="file" id='newPdf' accept='.pdf' className='hidden' />
        <p className='text-white font-poppins ml-2 mt-3 mr-2 pl-2 rounded py-2 bg-blue-600 cursor-pointer'>{props.fileNames}</p>
      </div>
      <div className='w-full md:w-[43%] bg-rose-700'>Preview</div>
      <div className='w-full md:w-[42%] bg-yellow-600'>Chat</div>
    </div>
    </div>
  )
}

export default Chat;

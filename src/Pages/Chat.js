import React, { useState, useEffect } from 'react';
import Header from './../Components/Header';

const Chat = () => {
  const [storedData, setStoredData] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  useEffect(() => {
    const data = localStorage.getItem('uploadedFiles');
    if (data) {
      setStoredData(JSON.parse(data));
    }
  }, []);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  return (
    <div>
      <Header />
      <div className='flex md:flex-row flex-col w-full h-[91.5vh]'>
        <div className='w-full md:w-[15%] bg-slate-800'>
          <label htmlFor="newPdf" className='text-white text-center pt-3 mt-2 text-sm font-poppins border-[2px] border-dashed border-white rounded w-[70%] h-14 ml-[15%] cursor-pointer'>Drop PDF</label>
          <input type="file" id='newPdf' accept='.pdf' className='hidden' />
          <ul className='text-white font-poppins mt-3 mr-4 rounded'>
            {storedData.map((item, index) => (
              <li key={index} className={index === selectedItemIndex ? 'first-item' : ''} onClick={() => handleItemClick(index)}>{item}</li>
            ))}
          </ul>
        </div>
        <div className='w-full md:w-[43%] bg-rose-700'>Preview</div>
        <div className='w-full md:w-[42%] bg-yellow-600'>Chat</div>
      </div>
    </div>
  );
}

export default Chat;

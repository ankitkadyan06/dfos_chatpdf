import React from 'react'
import Header from '../Components/Header'
import FileUpload from '../Components/FileUpload'

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Montserrat:wght@500&family=Poppins:wght@300;400;500;700&family=Roboto&family=Ubuntu&display=swap');
</style>
const HomePage = () => {
  return (
    <div>
     <Header/>
     <div className='mt-[30px] font-poppins'>
      <p className='text-center text-slate-600 text-4xl font-poppins font-semibold underline underline-offset-8 decoration-slate-600'>DFOS ChatPDF</p>
      <p className='w-[50%] text-slate-400 ml-[25%] mt-6 text-justify'>DFOS ChatPDF is an advanced AI tool revolutionizing the way we interact with PDF documents. Through a user-friendly interface, individuals can ask questions, request information, or give commands related to the content within the PDF, and DFOS ChatPDF processes these queries in real-time to provide accurate and relevant responses.</p>
      </div>
      <FileUpload/>
    </div>
  )
}

export default HomePage

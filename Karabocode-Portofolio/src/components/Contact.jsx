import React from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail, AiOutlineProject} from 'react-icons/ai';
export const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] w-[75%] flex justify-center  bg-gray-480 shadow-gray-480 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>Contact 
        <span><AiOutlineMail size={15} /></span></h1>
        <form action="" method='POST' encType='multipart/form-data'>

            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label htmlFor="/"  className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="/" className='uppercase text-sm py-2'>Phone</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone number' />
                </div>
            </div>

            <div className='flex flex-col py-2'>
                <label htmlFor='/' className='uppercase text-sm py-2'>Email</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email' />
            </div>
            
            <div className='flex flex-col py-2'>
                <label htmlFor='/' className='uppercase text-sm py-2'>Subject</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject' />
            </div>
            
            <div className='flex flex-col py-2'>
                <label htmlFor='/' className='uppercase text-sm py-2'>Message</label>
                <textarea className='border-2 rounded p-3 border-gray-300' name="message"  rows="10"></textarea>
            </div>

            <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>
                Send Message
            </button>
        </form>
    </div>
  )
}

export default Contact
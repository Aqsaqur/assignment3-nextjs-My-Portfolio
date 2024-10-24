import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="zoom-in">Contact me</h2>
                <p className='text-pink-600 text-[18px] pt2' data-aos="zoom-in">
                    Send me mail, send feedback and Stay Updated.
                </p>
                <div className='flex gap-3 items-center' data-aos="zoom-in">
                    <MdOutlineMail size={30}/> abc@gmail.com
                </div>
                <div className='flex gap-3 items-center' data-aos="zoom-in">
                    <MdLocalPhone size={30}/> (021) 000-0000
                </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1' data-aos="zoom-in">
                    <label htmlFor='name'>Name</label>
                    <input type='text' 
                    className='h-[40px] bg-white border-accent'
                    id='name'/>
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in">
                    <label htmlFor='email'>Email</label>
                    <input type='text' 
                    className='h-[40px] bg-white border-accent'
                    id='email'/>
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in">
                    <label htmlFor='msg'>Message
                    </label>
                    <textarea 
                    className='bg-white border-accent'
                    id='msg' rows={8}>
                    </textarea>
                </div>
                <button className='bg-accent p-2 px-6'data-aos="zoom-in">Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact
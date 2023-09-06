import React from 'react'

const Contact = () => {
  return (
    <div className='py-5 text-center wrapper'>
    <h2 className='text-3xl font-semibold mb-5'>Feel Free to Contact Us</h2>
    <iframe className='mb-[3rem]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.058681087414!2d71.64873107461914!3d34.11924741419121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d93f3a13a4af59%3A0x15800eb596413cd7!2sGulbela%20bazaar!5e0!3m2!1sen!2s!4v1693992394701!5m2!1sen!2s" style={{border:0,width:"100%",height:"450px"}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'>

    </iframe>

    <form method='POST' action='https://formspree.io/f/xeqbkpok' className=' w-[350px] m-auto p-3'>
       <div className='w-full border text-black rounded-md mb-3'>
        <input type='text' placeholder='Username' name='Username' required autoComplete='off' className='w-full px-2 py-3 border-none outline-none shadow-xl rounded-md'/>
       </div>
       <div className='w-full border text-black rounded-md mb-3'>
        <input type='email' placeholder='Email' name='Email' required autoComplete='off' className='w-full px-2 py-3 border-none outline-none shadow-xl rounded-md'/>
       </div>
       <div className='w-full border text-black rounded-md mb-3'>
        <textarea rows={5} cols={20} placeholder='Enter Your Message' name='Message' className='w-full px-2 py-3 border-none outline-none shadow-xl rounded-md'></textarea>
       </div>
       <div className='w-full'>
        <input type='submit' value={'SEND'} className='w-full bg-[orange] py-3 rounded-md text-white font-semibold'/>
       </div>
    </form>
    </div>
  )
}

export default Contact
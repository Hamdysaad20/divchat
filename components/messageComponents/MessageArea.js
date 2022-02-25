import React from "react";
import LHmessage from "./LHmessage";
import RHmessage from "./RHmessage";
import UserChat from "./UserChat";
import {useEffect} from "react";

function MessageArea() {
  useEffect(() => {
    var messageBody = document.querySelector('#messageBody');
  messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
  }, []);
  return (
    <div id="messageBody" className='mb-16 w-screen overflow-hidden overflow-y-scroll  relative  m-0 p-0'>
      <UserChat />
      <div  className='ml-3   justify-center overflow-hidden overflow-y-scroll'>
        <LHmessage />
        <RHmessage />
        <LHmessage />
        <RHmessage />
        <LHmessage />
        <RHmessage />
        <LHmessage />
        <RHmessage />
        <LHmessage />
        <RHmessage />
        <LHmessage />
        <RHmessage />
        <LHmessage />
        <RHmessage />
        <LHmessage />
        <RHmessage />
        <LHmessage />
        <RHmessage />
        <LHmessage />
        <RHmessage />
        <LHmessage />
        <RHmessage />
        <LHmessage />
        <RHmessage />
        <LHmessage />
        <RHmessage />
        <LHmessage />
        <RHmessage />
        <LHmessage />
        <RHmessage />
        <LHmessage />
        <RHmessage />
<div className=' flex items-center bg-gray-900  m-2 -ml-1  z-50 '>
            <form className='fixed  flex w-[40%] md:w-[60%] lg:w-[65%]   justify-center  bottom-0  p-1 m-2 flex-row bg-gray-600/60  rounded-md px-4 py-3 z-10 max-w-screen-lg  dark:text-white  shadow-md'>
              <input
                type='text'
                placeholder='Type your message here...'
                className='flex-1 bg-transparent outline-none'
              />
              <button
                type='submit'
                className='uppercase font-semibold text-sm tracking-wider text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors'>
                Send
              </button>
            </form>
          </div>

      
      </div>
    </div>
  );
}

export default MessageArea;

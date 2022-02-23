import React from "react";
import LHmessage from "./LHmessage";
import RHmessage from "./RHmessage";
import UserChat from "./UserChat";

function MessageArea() {
  return (
    <div className=' w-screen  m-0 p-0'>
      <UserChat />
      <div className='  justify-center'>
        <LHmessage />
        <RHmessage />
        <div className='fixed bottom-2   h-20 z-50   opacity-2 bg-gray-900/60 w-screen'>
          <div className='absolute w-full '>
            <form className='flex   flex-row bg-gray-600/60  rounded-md px-4 py-3 z-10 max-w-screen-lg  dark:text-white  shadow-md'>
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
    </div>
  );
}

export default MessageArea;

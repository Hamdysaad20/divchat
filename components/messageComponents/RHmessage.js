import { Avatar } from "@nextui-org/react";
import React from "react";

function RHmessage() {
  return (
    <div className='flex-cols-2   flex'>
      <div className='mt-5'>
        <Avatar
          src='/divico.png'
          bordered
          className=''
          size='sm'
          color='error'
        />
      </div>

      <div className='max-w-[30%] ml-4 place-content-center mt-2 md:mt-3 lg:mt-2 inline-block'>
        <div className='bg-red-700/90  font-normal  mx-3 px-4 py-1 rounded-lg'>
          <h1 className='text-neutral-200 text-xl'> Hi iam admin here!</h1>
        </div>
        <div className='bg-red-900/60 h-2 w-2 absolute mt-[-7px] rounded-full mr-[-2px] -rotate-12'></div>
      </div>
    </div>
  );
}

export default RHmessage;

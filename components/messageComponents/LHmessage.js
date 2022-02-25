import { Avatar } from "@nextui-org/react";
import React from "react";

function LHmessage() {
  return (
    <di className='flex-cols-2 flex'>
      <div className='mt-5'>
        <Avatar src='/divico.png' className='' size='sm' color='gradient' />
      </div>

      <div className='max-w-[30%] ml-4 place-content-center mt-2 md:mt-3 lg:mt-2 inline-block'>
        <div className='bg-blue-900/60   font-normal  mx-3 px-4 py-1 rounded-lg'>
          <h1 className='text-neutral-200 text-xl'>Hi iam a client !</h1>
        </div>
        <div className='bg-blue-900/60 h-2 w-2 absolute mt-[-7px] rounded-full mr-[-2px] -rotate-12'></div>
      </div>
    </di>
  );
}

export default LHmessage;

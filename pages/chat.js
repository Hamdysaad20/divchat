import React from "react";
import MessageArea from "../components/messageComponents/MessageArea";
import SidebarM from "../components/messageComponents/SidebarM";

function chat() {
  return (
    <div className='flex w-full h-full overflow-hidden '>
      <SidebarM />
      <div className='ml-1 relative h-screen'>
        <MessageArea />
      </div>
    </div>
  );
}

export default chat;
